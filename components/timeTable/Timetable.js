class Timetable {
    render() {
        let htmlTimetable = '';
        TIMETABLE.forEach(({image, name, description, teacher, date, time}) => {
            htmlTimetable += `
            <div class="timetable">
                <div class="timetable__table">
                    <div class="timetable__image">
                        <img src=${image} alt="курс">
                    </div>
                    <div class ="timetable__main-info">
                        <p>${name}</p>
                        <p>${time}</p>
                        <p>Преподаватель: ${teacher}</p>
                    </div>
                    <div class ="timetable__lesson-info">
                        <p>${description}</p>
                    </div>
                    <div class="timetable__date">
                        <h5>${date}</h5>
                    </div>
                </div>
            </div>
            `
        })

        const html = `
        <div class="container">
        <div class="timetable__title">
        <h4>Расписание</h4>
        </div>
            <ul>
                ${htmlTimetable}
            </ul>
        </div>
        `;

        ROOT_TIMETABLE.insertAdjacentHTML('afterbegin', html);
    }
}

const timetablePage = new Timetable();
timetablePage.render();