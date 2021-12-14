from django.urls import path

from . import views

urlpatterns = [
    path('teacher/', views.teacher_list),
    path('course/', views.course_list)

]
