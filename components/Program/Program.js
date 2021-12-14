class Program {
    render() {
        let htmlProgram = '';
        

        PROGRAM_LIST.forEach(({ id, name, modul, lessons }) => {
            let htmlLessonsList = '';
            let lessonsSting = '';
            lessonsSting = lessons.split("\n");
            lessonsSting.forEach((element) =>{
                htmlLessonsList +=`
                <li>
                    ${element}
                    
                </li>
                
                `
            })
            

            htmlProgram += `
            <li class='program-item'>
                
                <span class="program-modul">${modul}</span>
                <p class="program-name">${name}</span>
                <ul class="program-lessons">${htmlLessonsList}</ul>
                
            </li> 
            `
        })

        const html = `
        <div class="container">
        <h2>Программа</h2>
        <ul class="program-items">
            ${htmlProgram}
        </ul>

        </div>
        
        `;

        ROOT_PROGRAM.insertAdjacentHTML('afterbegin', html);

    }
}

const programPage = new Program();
programPage.render();