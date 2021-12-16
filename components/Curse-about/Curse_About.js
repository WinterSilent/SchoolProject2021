class CurseAbout {
  render(options){
    const html = `
        <div class="curse-about__container">
            <div class="curse-about__content">
                <div class="curse-about__column curse-about__column_flex">
                    <h1 class="curse-about__h">
                        ${options.result.name}
                    </h1>
                    <div class="curse-about__text">
                        ${options.result.title}
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
