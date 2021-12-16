class Action {
  render(){
    const html = `
        <div class="container action__container">
          <div class="action__call">Давай учиться <br>вместе!</div>
          <a href="#curses-anchor">
            <div class="action__choose">
              Выбрать курс
            </div>
          </a>
        </div>
      `;

      ROOT_ACTION.insertAdjacentHTML('afterbegin', html);
  }
}

const actionPage = new Action();
actionPage.render();
