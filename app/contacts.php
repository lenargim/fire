<?php include('partials/head.php');
include('partials/header.php'); ?>
<div class="breadcrumbs">
  <div class="container">
    <div class="breadcrumbs__wrap">
      <a href="/">Главная</a>
      <a href="contacts.php" class="disabled">Контакты</a>
    </div>
  </div>
</div>
<div class="title-page">
  <div class="container">
    <div class="title-page__wrap">
      <h1>Контакты</h1>
    </div>
  </div>
</div>
<main class="contacts-page">
  <div class="container">
    <div class="contacts__info block">
      <a href="tel:+73432891608" class="contacts__phone">8 (343) 289 16 08</a>
      <address class="contacts__address">620014, г. Екатеринбург,<br>ул. Бориса Ельцина, 1а,<br>оф. 16 / 04</address>
      <a href="mailto:info@corporatedomain.ru" class="contacts__mail">info@corporatedomain.ru</a>
    </div>
    <div class="contacts__map block">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.9934556419244!2d60.587796815537104!3d56.84605611461133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e670faf89c1%3A0x3ef888399803d6b8!2z0YPQuy4g0JHQvtGA0LjRgdCwINCV0LvRjNGG0LjQvdCwLCAx0LAsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMDAxNA!5e0!3m2!1sru!2sru!4v1643493306352!5m2!1sru!2sru"
              width="100%" height="560" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="contacts__callback block">
      <div class="before">Готовы сотрудничать?</div>
      <div class="ask__title">
        <h2>Оставить заявку<br>на услуги</h2>
        <span>Оставьте свои контактные данные<br>и мы свяжемся с вами, чтобы ответить<br>на любые вопросы</span>
      </div>
      <form action="" class="ask__form" id="contacts">
        <div class="input-row">
          <label for="contacts-name" class="required">Имя</label>
          <input type="text" id="contacts-name" placeholder="Примеров Пример">
          <span class="hint-text">Текст подсказки</span>
        </div>
        <div class="input-row">
          <label for="contacts-phone" class="required">Телефон</label>
          <input type="tel" id="contacts-phone" placeholder="+7 (___) ___-__-__">
          <span class="hint-text">Текст подсказки</span>
        </div>
        <div class="input-row">
          <label for="contacts-textarea">Ваш вопрос</label>
          <textarea name="" id="contacts-textarea" rows="10"
                    placeholder="Например — свяжитесь со мной в рабочее время с 9 до 18 по мск. времени"></textarea>
          <span class="hint-text">Текст подсказки</span>
        </div>
        <div class="button-row">
          <button class="button submit" type="submit">Оформить заявку</button>
          <span>Нажимая на кнопку «Оформить заявку», я соглашаюсь с условиями обработки и использования персональных данных</span>
        </div>
      </form>
    </div>
  </div>
</main>
<?php include('partials/footer.php'); ?>

