class Curse_About {
  render(){
    const html = `
        <div class="curse-about__container">
            <div class="curse-about__content">
                <div class="curse-about__column curse-about__column_flex">
                    <h1 class="curse-about__h">
                        DATA SCIENCE
                    </h1>
                    <div class="curse-about__text">
                        За два года спрос на Data Scientist-ов вырос в два раза, по данным HeadHunter. Применяя методы машинного обучения, они строят прогнозы и повышают эффективность бизнес-процессов в любой отрасли.
                    </div>
                    <div id="curse-about__choose" class="curse-about__choose">
                      <a class="curse-about__a">Записаться</a>
                    </div>
                </div>
                <div class="curse-about__column">
                    <div class="curse-about__image">
                    </div>
                </div>
            </div>
        </div>
      `;

      ROOT_CURSE_ABOUT.insertAdjacentHTML('afterbegin', html);
  }
}

const curse_aboutPage = new Curse_About();
curse_aboutPage.render();
