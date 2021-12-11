class Footer {
  render(){
    const html = `
      <div class="footer_container">
        <div class="footer_content">
          <div class="footer_column">
            <p><b>8 (917) 749 37 99</b><br>
            Контактный центр</p>
            <p><b>8 (917) 749 37 98</b><br>
            Техподдержка</p>
            <p>Ярославль, ул.<br> Ленина, д.58,<br> блок А</p>
          </div>
          <div class="footer_column">
            <a class="footer_a" href="#">Медиа</a>
            <a class="footer_a" href="#">Корпоративным клиентам</a>
            <a class="footer_a" href="#">Для работодателей</a>
          </div>
          <div class="footer_column">
            <a class="footer_a" href="#"><b>Тензор, 2021</b></a>
          </div>
        </div>
      </div>
      `;

      ROOT_FOOTER.insertAdjacentHTML('afterbegin', html);
  }
}

const footerPage = new Footer();
footerPage.render();
