<?php include('partials/head.php'); ?>
<header class="header header_blue">
  <div class="container">
    <div class="header__wrap">
      <a href="/" class="header__logo">
        <picture>
          <source srcset="img/logo-m.jpg" media="(max-width:1023px)">
          <img src="img/logo.jpg" alt="logo Fire 96">
        </picture>
      </a>
      <div class="header__box desktop">
        <div class="header__top">
          <address class="header__address">620014, г. Екатеринбург, ул. Бориса Ельцина, 1а, оф. 16 / 04</address>
          <a href="tel:73432891608" class="header__phone">8 (343) 289 16 08</a>
          <a href="mailto:info@corporatedomain.ru" class="header__mail">info@corporatedomain.ru</a>
        </div>
      </div>
      <div class="burger mobile">
        <span></span>
      </div>
    </div>
  </div>
  <div class="mobile-menu mobile">
    <div class="container">
      <div class="mobile-menu__wrap">
        <nav class="mobile-menu__nav">
          <li><a href="services.php" class="mobile-menu__link">Услуги</a></li>
          <li><a href="cases.php" class="mobile-menu__link">Выполненные проекты</a></li>
          <li><a href="#" class="mobile-menu__link">СРО и лицензии</a></li>
          <li><a href="info.php" class="mobile-menu__link">Информация</a></li>
          <li><a href="contacts.php" class="mobile-menu__link">Контакты</a></li>
          <li><a href="#" class="mobile-menu__link">О компании</a></li>
        </nav>
        <div class="mobile-menu__callback button open-modal-checkout">Отправить заявку</div>
        <a href="mailto:info@corporatedomain.ru" class="mobile-menu__mail">info@corporatedomain.ru</a>
        <a href="tel:73432891608" class="mobile-menu__phone">8 (343) 289 16 08</a>
        <address class="mobile-menu__address">620014, г. Екатеринбург, ул. Бориса Ельцина, 1а, оф. 16 / 04</address>
        <div class="mobile-menu__socials">
          <a href="#" class="social">
            <svg>
              <use xlink:href="img/common-sprite.svg#fb"></use>
            </svg>
          </a>
          <a href="#" class="social">
            <svg>
              <use xlink:href="img/common-sprite.svg#inst"></use>
            </svg>
          </a>
          <a href="#" class="social">
            <svg>
              <use xlink:href="img/common-sprite.svg#vk"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
<section class="not-found">
  <div class="container">
    <div class="before">Ошибка 404</div>
    <div class="title-page title-page_transparent">
      <div class="title-page__wrap">
        <h1>Страница<br>не найдена</h1>
        <span>Мы имеем большой опыт и соответствующую<br>квалификацию, что позволяет оказывать<br>качественные услуги.</span>
      </div>
    </div>
    <a href="/" class="button not-found__button">На главную</a>
  </div>
</section>
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
<script src="js/scripts.js"></script>
</body>
</html>
