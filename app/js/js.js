$(document).ready(function () {
  $('input[type=tel]').mask('+7(Z00) 000-00-00', {translation: {'Z': {pattern: /[0-79]/}}});
  getSlider();
  $('.services__tab').on('click', function () {
    if ( $(this).hasClass('active') ) return;
    $('.services__tab').removeClass('active');
    $(this).addClass('active');
    let index = $(this).index();
    $('.services__box').removeClass('active').hide();
    $('.services__slider').removeClass('active');
    let active = $('.services__box').eq(index);
    active.addClass('active').fadeIn();
    active.find('.services__slider').addClass('active');
    getSlider()
  });
  let portfolio = new Swiper('.portfolio__slider', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        let slides = this.slides;
        slides.each(function (index, el) {
          let number;
          el > 8 ? number = ++el : number = `0${++el}`;
          $(this).find('.portfolio__counter').text(number)
        })
      },
    },
  });

  let clients = new Swiper('.clients__slider', {
    speed: 400,
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.faq__block').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('.faq__answer').slideUp(200)
    } else {
      $(this).addClass('active');
      $(this).find('.faq__answer').slideDown()
    }
  })

  $('.to-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

function getSlider() {
  return new Swiper('.services__slider.active', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        let slides = this.slides;
        slides.each(function (index, el) {
          let number;
          el > 8 ? number = ++el : number = `0${++el}`;
          $(this).find('span').text(number)
        })
      },
    },
  });
}