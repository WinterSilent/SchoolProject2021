class Header {
  render(){
    const html = `
        <div class="header_container">
          <div class="header_content">
            <div class="header_logo">
              <a href="index.html">ТЕНЗОР</a>
            </div>
            <div class="header_menu">
              <a href="#">О нас</a>
              <a href="#">Отзывы</a>
              <a href="#">Войти</a>
              <div class="header_choose">
                <a href="#">Выбрать курс</a>
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
