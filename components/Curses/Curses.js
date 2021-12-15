class Curses {
    render() {
        let htmlCurses = '';

        //fetch("https://school-project2021.herokuapp.com/api/course", {}).then(response => response.json())
        //.then(result => console.log(result));
        fetch("https://school-project2021.herokuapp.com/api/course", {}).then(response => response.json())
        .then(result => { 
        for (let key = 0; key < result.result.length; key++) {
            htmlCurses += `
            <li class="curses" onclick="location.href='curse.html?${result.result[key].id}'">
                <span>${result.result[key].name}</span>
                
            </li> 
            `  

        }
        let html = `
        <div class="container">
        <h2>Курсы<h2>
        <a name="curses-anchor"></a>
        <ul>
            ${htmlCurses}
        </ul>

        </div>

        `;
        ROOT_CURSES.insertAdjacentHTML('afterbegin', html);
        }); 
    }
}

const cursesPage = new Curses();
cursesPage.render();

