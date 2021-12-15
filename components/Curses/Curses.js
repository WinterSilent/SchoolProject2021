class Curses {
    render() {
        let htmlCurses = '';
        CURSELIST.forEach(({ id, name }) => {
            htmlCurses += `
            <li>
                <span>${name}</span>

            </li>
            `
        })

        const html = `
        <div class="curses__container">
            <a name="curses-anchor"></a>
            <div class="curses__title">
                <h3>Курсы</h3>
            </div>
            <ul>
                ${htmlCurses}
            </ul>
        </div>

        `;

        ROOT_CURSES.insertAdjacentHTML('afterbegin', html);

    }
}

const cursesPage = new Curses();
cursesPage.render();
