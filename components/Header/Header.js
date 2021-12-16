class Header {
  render(){
    const html = `
        <div class="header__container">
          <div class="container header__content">
            <div class="header__logo">
              <a class="header__a" href="index.html">ТЕНЗОР <br><span class="header__colortext">EDUCATION</span></a>
            </div>
            <div class="header__menu">
              <a class="header__a" href="#about-anchor">О нас</a>
              <a class="header__a" href="#reviews-anchor">Отзывы</a>
              <a class="header__a" href="#faq-anchor">FAQ</a>
              <a class="header__a header__a_white" href="#curses-anchor">
                <div class="header__choose">
                  Выбрать курс
                </div>
              </a>
            </div>
          </div>
        </div>
      `;

      ROOT_HEADER.insertAdjacentHTML('afterbegin', html);
  }
}

const headerPage = new Header();
headerPage.render();
