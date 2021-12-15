class Timetable {
    render() {
        let urlId = window.location.search[1];
        let url = "https://school-project2021.herokuapp.com/api/course/" + urlId;
        fetch(url, {}).then(response => response.json())
        .then(result => {
            console.log(result.result.timetable)
            let htmlTimetable = '';
            let date= '';
            let time ='';
            for (let key = 0; key < result.result.timetable.length; key++){
                date = result.result.timetable[key].date.split('-');
                date = date[2] + "." + date[1];
                time = result.result.timetable[key].time.split(':');
                time= time[0] + ":" + time[1];
                htmlTimetable += `
                <div class="timetable">
                    <div class="timetable__table">
                        <div class="timetable__image">
                            <img src=img/Rectangle123.jpg alt="курс">
                        </div>
                        <div class ="timetable__main-info">
                            <p>${result.result.timetable[key].name}</p>
                            <p>${time}</p>
                            <p>Преподаватель: ${result.result.timetable[key].teacher}</p>
                        </div>
                        <div class ="timetable__lesson-info">
                            <p>${result.result.timetable[key].description}</p>
                        </div>
                        <div class="timetable__date">
                            <h5>${date}</h5>
                        </div>
                    </div>
                </div>
                `
            }
            const html = `
            <div class="container">
            <div class="timetable__title">
            <h4>Расписание</h4>
            </div>
                <ul>
                ${htmlTimetable}
                </ul>
            </div>`;
            ROOT_TIMETABLE.insertAdjacentHTML('afterbegin', html);
        }) 
        
   
    }
}

const timetablePage = new Timetable();
timetablePage.render();