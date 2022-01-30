$(document).ready(function () {
  $('input[type=tel]').mask('+7(Z00) 000-00-00', {translation: {'Z': {pattern: /[0-79]/}}});
  getSlider();
  $('.services__tab').on('click', function () {
    if ($(this).hasClass('active')) return;
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

  $('.header__link').each(function (index) {
    if ($(this).attr('href') == location.pathname.substr(1)) {
      $(this).addClass('disabled');
    }
  });

  $('a.disabled').on('click', function (e) {
    e.preventDefault();
  });

  let caseSlider = new Swiper('.case-page__slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    spaceBetween: 50,
    preloadImages: false,
    allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      clickable: true,
      currentClass: 'active',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  caseSlider.on('slideChange', function () {
    let pagItem = $('.case-page__pagination-item');
    pagItem.removeClass('active');
    pagItem.eq(caseSlider.activeIndex).addClass('active')
  });


  $('.case-page__img').magnificPopup({
    type: 'image',
    tClose: 'Закрыть',
    tLoading: 'Загрузка...',
    gallery: {
      enabled: true,
      preload: [0, 1],
      navigateByImgClick: true,
      tPrev: 'Назад', // title for left button
      tNext: 'Вперед', // title for right button
    },
    image: {
      markup: '<div class="mfp-figure">' +
        '<div class="mfp-close"></div>' +
        '<div class="mfp-img"></div>' +
        '<div class="mfp-title"></div>' +
        '</div>',
      titleSrc: function (item) {
        return item.el.attr('title');
      },
    },
  });

  $('.modal__close').on('click', function () {
    $('.modal').removeClass('active');
    $('.overlay').removeClass('active');
  })

  $('.open-modal-checkout').on('click', function () {
    $('.modal-checkout').addClass('active');
    $('.overlay').addClass('active');
  })

  $('.open-modal-question').on('click', function () {
    $('.modal-question').addClass('active');
    $('.overlay').addClass('active');
  })
});


(function (d) {
  "use strict";
  let
    comps = {
      number: function (a, b) {
        return a - b;
      },
      text: function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      }
    },
    sortTypes = {
      date: {
        get: function (cell) {
          return Date.parse(cell.textContent);
        },
        sort: comps.number
      },
      number: {
        get: function (cell) {
          return +cell.textContent;
        },
        sort: comps.number
      },
      text: {
        get: function (cell) {
          return cell.textContent;
        },
        sort: comps.text
      }
    },
    tablesortTh = d.querySelectorAll("th[data-tablesort]");
  for (var i = 0, th; th = tablesortTh[i]; i++) {
    if (!sortTypes[th.dataset.tablesort]) continue;
    let button = d.createElement("button");
    button.className = "sortButton";
    button.onclick = tablesort;
    button.textContent = th.textContent;
    button.type = "button"; // remember, default is SUBMIT!
    th.textContent = "";
    th.appendChild(button);
  }

  function tablesort(event) {
    let
      button = event.currentTarget,
      th = button.parentNode,
      thead_tr = th.parentNode,
      tbody = thead_tr.parentNode.nextElementSibling,
      type = sortTypes[th.dataset.tablesort],
      callback = (
        (button.value = button.value == 1 ? 0 : 1) ?
          function (a, b) {
            return type.sort(a.value, b.value);
          } :
          function (a, b) {
            return type.sort(b.value, a.value);
          }
      ),
      sortList = [],
      e = th;

    while (e = e.previousElementSibling) e.firstElementChild.value = "";
    e = th;
    while (e = e.nextElementSibling) e.firstElementChild.value = "";
    if (e = tbody.firstElementChild) do {
      sortList.push({
        tr: e,
        value: type.get(e.cells[th.cellIndex])
      });
    } while (e = e.nextElementSibling);
    sortList.sort(callback);
    for (var i = 0; e = sortList[i]; i++) tbody.appendChild(e.tr);
  }
})(document);


function getSlider() {
  return new Swiper('.services__slider.active', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}