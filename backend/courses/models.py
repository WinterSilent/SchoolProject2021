from django.db import models
from django_better_admin_arrayfield.models.fields import ArrayField


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
    title = models.TextField('Заголовок', null=True, blank=False)
    description_title = models.TextField('Заголовок описания', null=True, blank=False)
    description1 = models.TextField('Описание1', null=True, blank=False)
    description2 = models.TextField('Описание2', null=True, blank=False)
    content = ArrayField(models.CharField(max_length=500), null=True, blank=False)

    def __str__(self):
        return self.name

    def list_dict(self):
        return {
            'id': self.pk,
            'name': self.name
        }

    def read_dict(self):
        timetable = Timetable.objects.filter(course_id=self).order_by('date').select_related('teacher')
        return {
            'id': self.pk,
            'name': self.name,
            'title': self.title,
            'description_title': self.description_title,
            'description_text1': self.description1,
            'description_text2': self.description2,
            'content': self.content,
            'modules': [m.to_dict() for m in Module.objects.filter(course_id=self).order_by('pk')],
            'timetable': [m.to_dict() for m in timetable]
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


class Module(models.Model):
    name = models.CharField('Название', max_length=500)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False, blank=False)
    content = ArrayField(models.CharField(max_length=500), null=True, blank=False)

    def __str__(self):
        return f'{self.course.name} - {self.name}'

    def to_dict(self):
        return {
            'id': self.pk,
            'name': self.name,
            'content': self.content
        }


class Timetable(models.Model):
    name = models.CharField('Название', max_length=500)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False, blank=False)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=False)
    description = models.TextField('Описание')
    date = models.DateField('Дата')
    time = models.TimeField('Время')

    def __str__(self):
        return f'{self.course.name} - {self.name}'

    def to_dict(self):
        return {
            'id': self.pk,
            'name': self.name,
            'description': self.description,
            'date': self.date,
            'time': self.time,
            'teacher': self.teacher.name
        }

