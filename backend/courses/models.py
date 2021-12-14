from django.db import models


class Teacher(models.Model):
    name = models.CharField('ФИО', max_length=500)
    position = models.CharField('Должность', max_length=500)
    description = models.TextField('Описание')
    image = models.CharField('Ссылка на картинку', max_length=500)

    def __str__(self):
        return self.name

    def to_dict(self):
        return {
            'id': self.pk,
            'name': self.name,
            'position': self.position,
            'description': self.description,
            'image': self.image
        }


class Course(models.Model):
    name = models.CharField('Название', max_length=500)

    def __str__(self):
        return self.name

    def to_dict(self):
        return {
            'id': self.pk,
            'name': self.name
        }
