$(document).ready(function () {
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