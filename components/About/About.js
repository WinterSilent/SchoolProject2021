class About {
  render(){
    const html = `
        <div class="container about__container">
          <div class="about__heading">
            <div class="about__banner">
              МЫ СОЗДАЕМ ТЕХНОЛОГИИ
            </div>
            <div class="about__topic">
              <div class="about__topic-text">
                Что такое Тензор? Это вектор. И мы движемся вперед с 1996 года как в работе, так и просто по жизни.
              </div>
              <a href="#curses-anchor">
                <div class="about__choose">
                  Выбрать курс
                </div>
              </a>
            </div>
          </div>
          <div class="about__description">
            <a name="about-anchor"></a>
            <div class="about__btn">
              <div class="about__btn-circle">
                <div class="about__btn-arrow">
                </div>
              </div>
            </div>
            <div class="about__education">
              <p>
                <span class="about__education_letter-spacing">ТЕНЗОР</span> EDUCATION - это особенный проект, направленный на поиск и
                обучение молодых людей, увлеченных миром айти. Мы хотим помочь вам
                познакомиться с сферой поближе, а также подарить уникальную возможность
                стать частью компании тензор!
              </p>
              <img src="img/education.png" alt="education">
            </div>
          </div
        </div>

      `;

      ROOT_ABOUT.insertAdjacentHTML('afterbegin', html);
  }
}

const aboutPage = new About();
aboutPage.render();
