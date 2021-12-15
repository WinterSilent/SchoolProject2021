class Lern {
    render() {
        let urlId = window.location.search[1];
        let url = "https://school-project2021.herokuapp.com/api/course/" + urlId;
        let htmlLern = '';
        fetch(url, {}).then(response => response.json())
        .then(result => {
            for (let key = 0; key < result.result.content.length; key++){
                htmlLern += `
                    <li class='lern-item'>
                        <img src="img/Icon.png">
                    <span class="lern-name">${result.result.content[key]}</span>
                    </li> 
            `
            }
            const html = `
            <div class="container">
            <h2>Вы узнаете, как</h2>
                <ul class="lern-items">
                    ${htmlLern}
                </ul>
            </div>`;

            ROOT_LERN.insertAdjacentHTML('afterbegin', html);
        }) 
    }
}

const lernPage = new Lern();
lernPage.render();