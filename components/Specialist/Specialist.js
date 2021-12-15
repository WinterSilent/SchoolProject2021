class Specialist {
    render(result) {
            const html = `
                <div class="container">
                    <div class="specialist-title">${result.result.description_title}</div>
                            <ul class="specialist-items">
                            <li class="specialist-item"> 
                                <p class="specialist-item__str">${result.result.description_text1}</p>    
                            </li> 
                            <li class="specialist-item"> 
                                <p class="specialist-item__str">${result.result.description_text2}</p>    
                            </li> 
                            </ul>
                </div>`;
            ROOT_SPECIALIST.insertAdjacentHTML('afterbegin', html);
    }
}

