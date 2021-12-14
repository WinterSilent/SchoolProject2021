class Action {
  render(){
    const html = `
        <div class="action__container">
          <div class="action__call">Давай учиться <br>вместе!</div>
          <div class="action__choose">
            <a href="#curses-anchor">Выбрать курс</a>
          </div>
        </div>
      `;

      ROOT_ACTION.insertAdjacentHTML('afterbegin', html);
  }
}

const actionPage = new Action();
actionPage.render();
