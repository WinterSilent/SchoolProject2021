class Header {
  render(){
    const html = `
        <div class="header__container">
          <div class="header__content">
            <div class="header__logo">
              <a class="header__a" href="index.html">ТЕНЗОР<br><span class="header__colortext">EDUCATION</span></a>
            </div>
            <div class="header__menu">
              <a class="header__a" href="#program-anchor">Программа</a>
              <a class="header__a" href="#faqсourse-anchor">FAQ</a>
              <a class="header__a" href="#timetable-anchor">Расписание</a>
              <a class="header__a header__a_white">
                <div id="curse-header__choose" class="header__choose">
                  Записаться
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
