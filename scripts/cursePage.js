let urlParams = new URLSearchParams(window.location.search);
const urlId = urlParams.get('id');
let url = "https://school-project2021.herokuapp.com/api/course/" + urlId;
fetch(url, {}).then(response => response.json())
        .then(result =>{

            const specialistPage = new Specialist();
            specialistPage.render(result);

            const lernPage = new Lern();
            lernPage.render(result);

            const programPage = new Program();
            programPage.render(result);

            const timetablePage = new Timetable();
            timetablePage.render(result);
        }).catch(error => alert("Что-то пощло не так"))