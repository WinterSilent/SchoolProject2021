class Lern {
    render() {
        let htmlLern = '';
        

        LERN_LIST.forEach(({ id, lern }) => {
           
            htmlLern += `
            <li class='lern-item'>
                <img src="/img/Icon.png">
                <span class="lern-name">${lern}</span>
                
            </li> 
            `
        })

        const html = `
        <div class="container">
        <h2>Вы узнаете, как</h2>
        <ul class="lern-items">
            ${htmlLern}
        </ul>

        </div>
        
        `;

        ROOT_LERN.insertAdjacentHTML('afterbegin', html);

    }
}

const lernPage = new Lern();
lernPage.render();