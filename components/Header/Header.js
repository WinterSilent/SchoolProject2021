class Header {
  render(){
    const html = `
        <div class="header__container">
          <div class="header__content">
            <div class="header__logo">
              <a class="header__a" href="index.html">ТЕНЗОР</a>
            </div>
            <div class="header__menu">
              <a class="header__a" href="#about-anchor">О нас</a>
              <a class="header__a" href="#reviews-anchor">Отзывы</a>
              <a class="header__a" href="#faq-anchor">FAQ</a>
              <div class="header__choose">
                <a class="header__a" href="#curses-anchor">Выбрать курс</a>
              </div>
            </div>
          </div>
        </div>
      `;

      ROOT_HEADER.insertAdjacentHTML('afterbegin', html);
  }
}

const headerPage = new Header();
headerPage.render();
