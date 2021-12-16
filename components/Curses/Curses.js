class Curses {
    render() {
        let htmlCurses = '';

        fetch("https://school-project2021.herokuapp.com/api/course", {}).then(response => response.json())
        .then(result => {
        for (let key = 0; key < result.result.length; key++) {
            htmlCurses += `
            <li class="curses" onclick="location.href='curse.html?id=${result.result[key].id}'">
                <span>${result.result[key].name}</span>
            </li>
            `
        }

        let html = `
        <div class="container curses__container">
          <h2>Курсы<h2>
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
