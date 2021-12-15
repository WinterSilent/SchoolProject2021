from django.urls import path

from . import views

urlpatterns = [
    path('teacher', views.teacher_list),
    path('course/<int:course_id>/', views.course_read),
    path('course', views.course_list),
    path('feedback', views.feedback_list)

]
