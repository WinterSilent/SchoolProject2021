class Numbers {
  render(){
    const html = `
        <div class="numbers__container">
          <div class="numbers__sign">
            <span class="numbers__sign_letter-spacing">ТЕНЗОР</span> в числах
          </div>
          <div class="numbers__info">
            <div class="numbers__info-line numbers_info-line_partition">
              <div class="numbers__info-block">
                <div class="numbers__number">
                  11
                </div>
                <div class="numbers__text">
                  ЦЕНТРОВ РАЗРАБОТКИ
                </div>
              </div>
              <div class="numbers__info-block">
                <div class="numbers__number">
                  99
                </div>
                <div class="numbers__text">
                  ФИЛИАЛОВ
                </div>
              </div>
            </div>
            <div class="numbers__info-line">
              <div class="numbers__info-block">
                <div class="numbers__number">
                  6000
                </div>
                <div class="numbers__text">
                  СОТРУДНИКОВ
                </div>
              </div>
              <div class="numbers__info-block">
                <div class="numbers__number">
                  3500000
                </div>
                <div class="numbers__text">
                  КЛИЕНТОВ
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      ROOT_NUMBERS.insertAdjacentHTML('afterbegin', html);
  }
}

const numbersPage = new Numbers();
numbersPage.render();
