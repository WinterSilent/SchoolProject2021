class Congratulations_Modal {
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
        this.container.querySelector('.model-background').removeEventListener(
              'click', (e) => { this.destroy();  }
          );
        this.container.remove();
    }

   render() {
        return `
<div class="model-background">
  <div class="model-background__close"></div>
  <div class="model-block">
    <div class="model-content">
        <p>Вы успешно записаны на курс!</p>
        <div class="model-bottom">
            <div>
                Следите за почтой! Скоро вам придет уведомление от ТЕНЗОР <span class="model-bottom_letter-spacing">EDUCATION!</span>
            </div>
            <img src = "img/respect.png">
        </div>
    </div>
  </div>
</div>
<style>
  @import url("components/Modal/congratulations_modal.css");
</style>
`
    }

    afterRender() {
         this.container.querySelector('.model-background').addEventListener(
              'click', (e) => { this.destroy();  }
          );
     }

}
