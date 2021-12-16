class Faq {
    render() {
        let htmlFaq = `
            <div class="faq">
                <div class="container faq__container">
                    <div class="faq__title">
                        <h3>Часто задаваемые вопросы</h3>
                    </div>
                    <div class="faq__tabs">
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check1">
                            <label class="tab__label" for="check1">Сколько стоит курс?</label>
                            <div class="tab__content">
                                Курс бесплатный. Да-да, вы не ослышались!
                            </div>
                        </div>
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check2">
                            <label class="tab__label" for="check2">Получится ли совмещать с учебой?</label>
                            <div class="tab__content">
                                Конечно, все зависит от степени
                                вашей загруженности, но занятия будут проводиться
                                в 18:00 местного времени дважды в неделю - так, чтобы вы успевали отдохнуть
                                после пар и прибежать на курсы!
                            </div>
                        </div>
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check3">
                            <label class="tab__label" for="check3">Можно ли после прохождения устроиться на работу?</label>
                            <div class="tab__content">
                                Все зависит от вашего желания и целеустремленности.
                            </div>
                        </div>
                        <div class="tab">
                            <input class="tab__input" type="checkbox" id="check4">
                            <label class="tab__label" for="check4">Дается ли по окончании сертификат?</label>
                            <div class="tab__content">
                                Да, по окончании курса дается крутой сертификат!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        const html = `
        <div class="container">
            <ul>
                ${htmlFaq}
            </ul>
        </div>
        `;

        ROOT_FAQ.insertAdjacentHTML('afterbegin', html);

    }
}

const faqPage = new Faq();
faqPage.render();
