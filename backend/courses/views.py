from django.http import JsonResponse
from django.views.decorators.http import require_GET
from django.shortcuts import get_object_or_404
from .models import Teacher, Course, Feedback


@require_GET
def teacher_list(request):
    """Список учителей"""
    teachers = Teacher.objects.order_by('pk')[:5]
    return JsonResponse({'result': [t.to_dict() for t in teachers]},
                        safe=False, json_dumps_params={'ensure_ascii': False})


@require_GET
def course_list(request):
    """Список курсов"""
    courses = Course.objects.order_by('pk')
    return JsonResponse({'result': [c.list_dict() for c in courses]},
                        safe=False, json_dumps_params={'ensure_ascii': False})


@require_GET
def course_read(request, course_id):
    """Информация по курсу"""
    course = get_object_or_404(Course, pk=course_id)
    return JsonResponse({'result': course.read_dict()},
                        safe=False, json_dumps_params={'ensure_ascii': False})


@require_GET
def feedback_list(request):
    """Список курсов"""
    query = Feedback.objects.order_by('pk')[:5]
    return JsonResponse({'result': [rec.to_dict() for rec in query]},
                        safe=False, json_dumps_params={'ensure_ascii': False})
