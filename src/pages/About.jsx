import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      {/* Герой-секция */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">О нас</h1>
          <p className="hero-subtitle">Ваш комфорт в любой сезон с 2010 года</p>
        </div>
      </section>

      {/* Основное содержание */}
      <main className="about-content">
        {/* История компании */}
        <section className="about-section">
          <div className="section-content">
            <h2 className="section-title">Наша история</h2>
            <div className="history-grid">
              <div className="history-text">
                <p>
                  Компания <strong>WarmStyle</strong> была основана в 2010 году с простой идеей: 
                  создавать качественную, стильную и функциональную верхнюю одежду для суровых зим.
                </p>
                <p>
                  Начиная с небольшой мастерской по пошиву пуховиков, сегодня мы превратились 
                  в одного из лидеров рынка верхней одежды в России.
                </p>
                <p>
                  Наш секрет успеха прост: мы объединяем традиционные технологии утепления 
                  с современным дизайном, чтобы наши клиенты чувствовали себя комфортно 
                  и выглядели стильно в любую погоду.
                </p>
              </div>
              <div className="history-image">
                <div className="image-placeholder history-img"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="about-section values-section">
          <div className="section-content">
            <h2 className="section-title">Наши ценности</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon quality-icon"></div>
                <h3>Качество</h3>
                <p>
                  Мы используем только проверенные материалы: водоотталкивающие ткани, 
                  натуральный пух и современные синтетические утеплители.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon comfort-icon"></div>
                <h3>Комфорт</h3>
                <p>
                  Каждая модель разрабатывается с учетом анатомии человека, обеспечивая 
                  полную свободу движений и оптимальную терморегуляцию.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon style-icon"></div>
                <h3>Стиль</h3>
                <p>
                  Наши дизайнеры следят за последними тенденциями, создавая одежду, 
                  которая подходит для города, путешествий и активного отдыха.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon eco-icon"></div>
                <h3>Экологичность</h3>
                <p>
                  Мы заботимся о природе, используя переработанные материалы и 
                  ответственно подходя к производству.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Технологии */}
        <section className="about-section">
          <div className="section-content">
            <h2 className="section-title">Наши технологии</h2>
            <div className="technology-grid">
              <div className="technology-image">
                <div className="image-placeholder tech-img">
                
                </div>
              </div>
              <div className="technology-text">
                <h3>Инновационные материалы</h3>
                <p>
                  Мы используем передовые технологии утепления, такие как:
                </p>
                <ul className="tech-list">
                  <li><strong>ThermoProtect</strong> — система многослойного утепления</li>
                  <li><strong>AquaShield</strong> — водоотталкивающая пропитка</li>
                  <li><strong>BreathFlex</strong> — дышащие мембранные ткани</li>
                  <li><strong>EcoDown</strong> — гипоаллергенный пух и синтетические наполнители</li>
                </ul>
                <p>
                  Все наши материалы проходят строгий контроль качества и тестирование 
                  в экстремальных условиях.
                </p>
              </div>
            </div>
          </div>
        </section>

{/*       
        <section className="about-section team-section">
          <div className="section-content">
            <h2 className="section-title">Наша команда</h2>
            <p className="section-description">
              За нашими продуктами стоит команда профессионалов: дизайнеры, технологи, 
              швеи и консультанты, которые любят свое дело.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo member-1"></div>
                <h3>Анна Иванова</h3>
                <p className="member-role">Главный дизайнер</p>
                <p>Опыт работы 12 лет</p>
              </div>
              <div className="team-member">
                <div className="member-photo member-2"></div>
                <h3>Дмитрий Смирнов</h3>
                <p className="member-role">Технолог</p>
                <p>Специалист по материалам</p>
              </div>
              <div className="team-member">
                <div className="member-photo member-3"></div>
                <h3>Ольга Петрова</h3>
                <p className="member-role">Менеджер качества</p>
                <p>Контроль на всех этапах</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Призыв к действию */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>Готовы выбрать свою идеальную куртку?</h2>
            <p>
              Ознакомьтесь с нашей коллекцией пуховиков и курток для любого сезона 
              и стиля жизни.
            </p>
            <a className="productCard_btn">Перейти в каталог</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;