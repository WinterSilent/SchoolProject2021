class Specialist {
    render() {
        const html = `
        <div class="container">
        <div class="specialist-title">Чем занимается специадисты по ${SPECIALIST_LIST[0].namePadeg}?</div>
        <ul class="specialist-items">
            <li class="specialist-item"> 
             <p class="specialist-item__str">${SPECIALIST_LIST[0].str1}</p>    
            </li> 
            <li class="specialist-item"> 
             <p class="specialist-item__str">${SPECIALIST_LIST[0].str2}</p>    
            </li> 
            
        </ul>

        </div>
        
        `;

        ROOT_SPECIALIST.insertAdjacentHTML('afterbegin', html);

    }
}

const specialistPage = new Specialist();
specialistPage.render();