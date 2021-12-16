class Teachers {
    render() {
        let htmlTeachers = '';
        TEACHERSLIST.forEach(({name, position, description, image}) => {
            htmlTeachers += `
        <div class="teachers">
            <div>
                <div class="teachers__info">
                    <div class="teachers__name">
                        <p class="teachers__name-p">${name}</p>
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

        const html = `
        <div class="container teachers__container">
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

const teachersPage = new Teachers();
teachersPage.render();
