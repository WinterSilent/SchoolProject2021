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


class Feedback(models.Model):
    name = models.CharField('ФИО', max_length=500)
    position = models.CharField('Должность', max_length=500)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False, blank=False)
    text = models.TextField('Отзыв', default='', blank=True)
    image = models.CharField('Ссылка на картинку', max_length=500)

    def __str__(self):
        return self.name

    def to_dict(self):
        return {
            'id': self.pk,
            'name': self.name,
            'position': self.position,
            'course_name': self.course.name,
            'text': self.text,
            'image': self.image
        }
