class Teachers {
    //в методе в цикле тянем значения ключей каждого объекта и вставляем в верстку
    render() {
        let htmlTeachers = '';
        TEACHERSLIST.forEach(({name, position, description, image}) => {
            htmlTeachers += `
        <div class="teachers">
            <div>
                <div class="teachers__info">
                    <div class="teachers__name">
                        <h1>${name}</h1>
                    </div>
                    <div class="teachers__text-description">
                        <h2>${position}</h2>
                        <p>${description}</p>
                    </div>
                    <div class="teachers__image">
                        <img src=${image} alt="teacher">
                    </div>
                </div>

            </div>
        </div>
            `
        })
        //компонуем
        const html = `
        <div class="teachers__container">
            <div class="teachers__title">
                <h3>Команда</h3>
            </div>
            <ul>
                ${htmlTeachers}
            </ul>
        </div>
        `;
        ROOT_TEACHERS.insertAdjacentHTML('afterbegin', html);
    }
}
//создаем объект класса и вызываем метод
const teachersPage = new Teachers();
teachersPage.render();
