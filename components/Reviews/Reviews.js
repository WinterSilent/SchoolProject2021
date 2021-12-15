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
                <img class="reviews-item__img" src="${img}">
            </div>
            `
        })

        const html = `
        <div class="reviews__container">
            <div class="reviews__btn-circle" onclick="reviewsSlider.minus()">
                <div class="reviews__btn-arrow">
                </div>
            </div>
            ${htmlReviews}
            <div class="reviews__btn-circle" onclick="reviewsSlider.plus()">
                <div class="reviews__btn-arrow reviews__btn-arrow_right">
                </div>
            </div>
        </div>
        `;

        ROOT_REVIEWS.insertAdjacentHTML('afterbegin', html);

    }
}

const reviewsPage = new Reviews();
reviewsPage.render();

class Reviews__slider {

    constructor() {
        this.counter = 1;
        var a = document.getElementsByClassName("reviews-item");
        for(var j=0;j<a.length;j++){
          a[j].style.display = "none";
        }
        this.show();
    }

    minus() {
      this.counter = this.counter - 1;
      this.show();
      console.log(this.counter);
    }

    plus() {
      this.counter = this.counter + 1;
      this.show();
      console.log(this.counter);
    }

    show() {
      var i;
      var slides = document.getElementsByClassName("reviews-item");

      if(this.counter>slides.length){
        this.counter = 1;
      }
      if(this.counter<1){
        this.counter = slides.length;
      }
      for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
      }

      slides[this.counter-1].style.display = "flex";
    }
}

const reviewsSlider = new Reviews__slider();
