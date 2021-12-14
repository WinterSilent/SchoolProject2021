from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import Teacher, Course


@require_GET
def teacher_list(request):
    """Список учителей"""
    teachers = Teacher.objects.order_by('pk')[:5]
    return JsonResponse({'result': [t.to_dict() for t in teachers]})


@require_GET
def course_list(request):
    """Список курсов"""
    courses = Course.objects.order_by('pk')
    return JsonResponse({'result': [c.to_dict() for c in courses]})
