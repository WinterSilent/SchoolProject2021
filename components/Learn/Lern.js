class Lern {
    render(result) {
        let htmlLern = '';
            for (let key = 0; key < result.result.content.length; key++){
                htmlLern += `
                    <li class='lern-item'>
                        <img class ="lern-image" src="img/Icon.png">
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
        
    }
}

