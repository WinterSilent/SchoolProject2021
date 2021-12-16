class Header {
  render(){
    const html = `
        <div class="header__container">
          <div class="header__content">
            <div class="header__logo">
              <a class="header__a" href="index.html">ТЕНЗОР<br><span class="header__colortext">EDUCATION</span></a>
            </div>
            <div class="header__menu">
              <a class="header__a" href="#about-anchor">О нас</a>
              <a class="header__a" href="#">Отзывы</a>
              <a class="header__a" href="#faq-anchor">FAQ</a>
              <div id="curse-header__choose" class="header__choose">
                <a class="header__a">Записаться</a>
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
