import React from 'react'

const Footer = () => {
  return (

      <footer className="contacts-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>WarmStyle</h2>
              <p>Создаем уют и стиль в Москве с 2010 года</p>
            </div>
            <div className="footer-contacts">
              <p><i className="fas fa-phone"></i> +7 (495) 123-45-67</p>
              <p><i className="fas fa-envelope"></i> info@warmstyle.ru</p>
              <p><i className="fas fa-map-marker-alt"></i> Москва, ул. Теплая, д. 15</p>
            </div>
          </div>
          <div className="copyright">
            <p>© 2026 WarmStyle. Все права защищены.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer