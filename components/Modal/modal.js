class Modal {
    constructor(element) {
        this.mount(element);
    }

    mount(element) {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.innerHTML = this.render();
        this.afterRender();
        element.insertAdjacentElement('beforeend', this.container);
    }

    destroy() {
        this.container.querySelector('.model-background__close').removeEventListener(
              'click', (e) => { this.destroy();  }
          );
        this.container.querySelector('.model-close__btn').removeEventListener(
              'click', (e) => { this.destroy();  }
          );
        this.container.querySelector('.form__button').removeEventListener(
            'click', (e) => { this.destroy();  }
        );
        document.querySelector('#modal-form-btn').removeEventListener(
            'click', (e) => { const congratulations_modal = new Congratulations_Modal(document.body);  }
       );
        this.container.remove();
    }

   render() {
        return `
<div class="model-background">
  <div class="model-background__close"></div>
  <div class="model-block">
    <div class="model-close">
      <div class="model-close__btn"></div>
    </div>
    <div class="model-content">
        <p>Заполните форму, чтобы записаться на курс</p>
        <form action="#">
            <input class="form__input" type="text" id="fname" name="fname" value="" placeholder="Имя"><br>
            <input class="form__input" type="text" id="lname" name="lname" value="" placeholder="Телефон"><br>
            <input class="form__input" type="text" id="lnum" name="lnum" value="" placeholder="Почта"><br><br>
            <button id="modal-form-btn" class= "form__button" id="frmBtn">Записаться</button>
        </form>
    </div>
  </div>
</div>
<style>
  @import url("components/Modal/modal.css");
</style>
`
    }

    afterRender() {
         this.container.querySelector('.model-background__close').addEventListener(
              'click', (e) => { this.destroy();  }
          );
          this.container.querySelector('.model-close__btn').addEventListener(
             'click', (e) => { this.destroy();  }
          );
          this.container.querySelector('.form__button').addEventListener(
            'click', (e) => { this.destroy();  }
          );
          document.querySelector('#modal-form-btn').addEventListener(
            'click', (e) => { const congratulations_modal = new Congratulations_Modal(document.body);  }
       );
     }

}

document.querySelector('#curse-header__choose').addEventListener(
            'click', (e) => { const modal = new Modal(document.body);  }
       );

document.querySelector('#curse-about__choose').addEventListener(
            'click', (e) => { const modal = new Modal(document.body);  }
       );
