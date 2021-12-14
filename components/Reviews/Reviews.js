class Reviews {
    render() {
        let htmlReviews = '';
        REVIEWS_LIST.forEach(({ id, name, surname, status, cusrse, review, img }) => {
            htmlReviews += `
            <div class="reviews-item">
            
                <div class="reviews-item__container">   
                    <div class="reviews-item__person">
                        <div class="reviews-item__info">
                            <span class ="reviews-item__surname"> ${surname}</span>
                            <span class ="reviews-item__name"> ${name}</span>
                        </div>
                        <div class ="reviews-item__about">
                            <span class ="reviews-item__status"> ${status}</span>
                            <span class ="reviews-item__curse"> Выпускник курса ${cusrse}</span>
                        </div>
                    </div>
                    <p class="reviews-item__review">${review} </p>
                </div>
                <img src="${img}"> 
                
                
            </div> 
            `
        })

        const html = `
        <div class="container">
            ${htmlReviews}
        </div>
        
        `;

        ROOT_REVIEWS.insertAdjacentHTML('afterbegin', html);

    }
}

const reviewsPage = new Reviews();
reviewsPage.render();