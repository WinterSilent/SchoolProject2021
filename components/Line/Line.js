class Line {
    render() {
        const html = `
        <div class="line__container">
            <div>
                <h1>Давай дружить</h1>
                <h1>Давай дружить</h1>
                <h1>Давай дружить</h1>
                <h1>Давай дружить</h1>
                <h1>Давай дружить</h1>
                <h1>Давай дружить</h1>
            </div>
        </div>
        `;

        ROOT_LINE.insertAdjacentHTML('afterbegin', html);
    }
}

const linePage = new Line();
linePage.render();
