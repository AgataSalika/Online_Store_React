import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь обычно отправка данных на сервер
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contacts-page">
      {/* Хедер страницы */}
      <header className="contacts-header">
        <div className="container">
          <h1>Контакты WarmStyle</h1>
          <p>Свяжитесь с нами в Москве для обсуждения вашего проекта</p>
        </div>
      </header>

      <main className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            {/* Карточка с контактной информацией */}
            <div className="contact-info">
              <div className="info-card">
                <h2>Наши контакты</h2>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Адрес</h3>
                    <p>Москва, ул. Теплая, д. 15, офис 305</p>
                    <p>Бизнес-центр "Стиль"</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Телефон</h3>
                    <p>+7 (495) 123-45-67</p>
                    <p>+7 (495) 987-65-43 (факс)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>info@warmstyle.ru</p>
                    <p>sales@warmstyle.ru</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Часы работы</h3>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб: 10:00 - 16:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>

                <div className="social-links">
                  <h3>Мы в социальных сетях</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="fab fa-vk"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-telegram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Форма обратной связи */}
            <div className="contact-form-section">
              <div className="form-card">
                <h2>Свяжитесь с нами</h2>
                <p>Заполните форму ниже, и наш менеджер свяжется с вами в течение 24 часов</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Ваше имя *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Иванов Иван"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@mail.ru"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Сообщение *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Расскажите о вашем проекте или задайте вопрос..."
                    ></textarea>
                  </div>

                  <button type="submit" className="productCard_btn">
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Карта */}
          {/* <div className="map-section">
            <h2>Мы на карте</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <div className="map-info">
                    <h3>WarmStyle Москва</h3>
                    <p>ул. Теплая, д. 15, офис 305</p>
                    <p>Метро: Теплый стан, Стильная</p>
                    <a href="#" className="map-link">
                      <i className="fas fa-directions"></i> Построить маршрут
                    </a>
                  </div>
                </div>
                <div className="map-image">
                
                  <div className="map-mock">
                    <p>Интерактивная карта Москвы с отметкой офиса WarmStyle</p>
                    <div className="map-pin">
                      <i className="fas fa-map-pin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Дополнительная информация */}
          <div className="additional-info">
            <div className="info-card">
              <h2>Как добраться</h2>
              <div className="info-grid">
                <div className="info-item">
                  <i className="fas fa-subway"></i>
                  <h3>Метро</h3>
                  <p>Станции "Теплый стан" (5 мин пешком) или "Стильная" (7 мин пешком)</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-bus"></i>
                  <h3>Автобус</h3>
                  <p>Остановка "Улица Теплая": автобусы № 123, 456, 789</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-car"></i>
                  <h3>Автомобиль</h3>
                  <p>Рядом с бизнес-центром есть парковка на 50 мест (первые 2 часа бесплатно)</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-wheelchair"></i>
                  <h3>Доступность</h3>
                  <p>Здание оборудовано пандусами и лифтами для маломобильных посетителей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Contacts;