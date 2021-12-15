class Program {
    render() {

        let urlId = window.location.search[1];
        let url = "https://school-project2021.herokuapp.com/api/course/" + urlId;
        let htmlProgram = '';
        fetch(url, {}).then(response => response.json())
        .then(result => 
            {
                let htmlProgram = '';
                let modul = 'Модуль '
                for (let key = 0; key < result.result.modules.length; key++) 
                {
                    let htmlLessonsList = '';
                    for (let i = 0; i < result.result.modules[key].content.length; i++){
                        htmlLessonsList +=`
                            <li>
                                <span>${result.result.modules[key].content[i]}</soan>
                            </li>`
                    }
                    modul += "I"
                    htmlProgram += `
                        <li class='program-item'>
                        <span class="program-modul">${modul}</span>
                        <p class="program-name">${result.result.modules[key].name}</p>
                        <ul class="program-lessons">${htmlLessonsList}</ul>
                        </li>`
                }
                const html = `
                <div class="container">
                    <h2>Программа</h2>
                    <ul class="program-items">
                    ${htmlProgram}
                    </ul>
                </div>`;

                ROOT_PROGRAM.insertAdjacentHTML('afterbegin', html);
            });
    }
}

const programPage = new Program();
programPage.render();