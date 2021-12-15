from django.contrib import admin
from .models import Teacher, Course, Feedback, Timetable, Module
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin

admin.site.register(Teacher)
admin.site.register(Feedback)
admin.site.register(Timetable)


@admin.register(Module)
class MyModelAdmin(admin.ModelAdmin, DynamicArrayMixin):
    pass


@admin.register(Course)
class MyModelAdmin(admin.ModelAdmin, DynamicArrayMixin):
    pass
