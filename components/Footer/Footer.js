class Footer {
  render(){
    const html = `
      <div class="footer__container">
        <div class="container footer__content">
          <div class="footer__column">
            <p><b>8 (917) 749 37 99</b><br>
            Контактный центр</p>
            <p><b>8 (917) 749 37 98</b><br>
            Техподдержка</p>
            <p>Ярославль, ул.<br> Ленина, д.58,<br> блок А</p>
          </div>
          <div class="footer__column">
            <a class="footer__a" href="#">Медиа</a>
            <a class="footer__a" href="#">Корпоративным клиентам</a>
            <a class="footer__a" href="#">Для работодателей</a>
          </div>
          <div class="footer__column">
            <a class="footer__a" href="#"><b>Тензор, 2021</b></a>
          </div>
        </div>
      </div>
      `;

      ROOT_FOOTER.insertAdjacentHTML('afterbegin', html);
  }
}

const footerPage = new Footer();
footerPage.render();
