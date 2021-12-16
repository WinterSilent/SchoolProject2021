class FaqCourse {
    render(){
        const html = `
      <div class="faqCourse">
<!--      переиспользуем блок из другого компонента-->
                <div class="container faq__container">
                
                    <div class="faq__title">
                        <h4>Как мы учим</h4>
                    </div>
                    
                    <div class="faq__tabs">
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check1">
                            <label class="tab__label" for="check1">Про преподавателей</label>
                            <div class="tab__content">
                                Преподаватели курса - люди, работающие в компании ТЕНЗОР. Они
                                действительно знают толк в том, что преподают и готовы поделиться этими драгоценными знаниями с тобой!
                      
                            </div>
                        </div>
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check2">
                            <label class="tab__label" for="check2">Про домашние задания</label>
                            <div class="tab__content">
                                После каждой лекции вас ждет домашнее задание по пройденному материалу. Это
                                нужно для того, чтобы информация закрепилась на практике и чтобы мы видели, что вы действительно 
                                заинтересованы в обучении.
                            </div>
                        </div>
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check3">
                            <label class="tab__label" for="check3">Про итоговый проект</label>
                            <div class="tab__content">
                                После прохождения курса лекций, вас ожидает итоговый проект под наставничеством
                                одного из наших сотрудников - у вас будет возможность показать нам все то, чему вы научились!
                            </div>
                        </div>
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check4">
                            <label class="tab__label" for="check4">Про сертификат по окончании курса</label>
                            <div class="tab__content">
                                По окончании курса дается крутой сертификат, подтверждающий ваше обучение в школе ТЕНЗОР!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      `;

        ROOT_FAQCOURSE.insertAdjacentHTML('afterbegin', html);
    }
}

const faqCoursePage = new FaqCourse();
faqCoursePage.render();
