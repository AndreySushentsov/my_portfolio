(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();

$(window).on('load', function () {
  $('.preloader').fadeOut();
})

// burger
$('.nav__burger').click(function () {
  $(this).toggleClass('change');
  $('.overlay-nav__container').toggleClass('show');
});
$('.overlay-nav__link').click(function (e) {
  e.preventDefault();
  $('.nav__burger').toggleClass('change');
  $('.overlay-nav__container').toggleClass('show');
});


// smooth scroll
$("#scrollSpy").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    top = top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
});


// modal image
$('.c-about__edu-item').on('click', function(e) {
  e.preventDefault();
  var items = '';
  var activeItem = '';
  var childrenItems = '';

  $(this).addClass('active');

  items = $('.c-about__edu-list').find('.c-about__edu-item'); // находим все слайды
  activeItem = items.filter('.active');// находим слайды с классом active
  childrenItems = activeItem.children()[3];
  console.log(childrenItems);
  $('.c-modal__container').css({'display': 'block'});
  $('.c-modal__image').attr('src',childrenItems.src );
});

// close modal image button
$('.modal__burger').on('click',function() {
  var items = '';
  var activeItem = '';

  items = $('.c-about__edu-list').find('.c-about__edu-item'); // находим все слайды
  activeItem = items.filter('.active');
  activeItem.removeClass('active');
  $('.c-modal__container').css({'display': 'none'});
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxufSkoKTtcclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcucHJlbG9hZGVyJykuZmFkZU91dCgpO1xyXG59KVxyXG5cclxuLy8gYnVyZ2VyXHJcbiQoJy5uYXZfX2J1cmdlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjaGFuZ2UnKTtcclxuICAkKCcub3ZlcmxheS1uYXZfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbn0pO1xyXG4kKCcub3ZlcmxheS1uYXZfX2xpbmsnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcubmF2X19idXJnZXInKS50b2dnbGVDbGFzcygnY2hhbmdlJyk7XHJcbiAgJCgnLm92ZXJsYXktbmF2X19jb250YWluZXInKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG59KTtcclxuXHJcblxyXG4vLyBzbW9vdGggc2Nyb2xsXHJcbiQoXCIjc2Nyb2xsU3B5XCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG5cclxuICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgICB0b3AgPSB0b3A7XHJcbiAgICAvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcbiAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDUwMCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIG1vZGFsIGltYWdlXHJcbiQoJy5jLWFib3V0X19lZHUtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdmFyIGl0ZW1zID0gJyc7XHJcbiAgdmFyIGFjdGl2ZUl0ZW0gPSAnJztcclxuICB2YXIgY2hpbGRyZW5JdGVtcyA9ICcnO1xyXG5cclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgaXRlbXMgPSAkKCcuYy1hYm91dF9fZWR1LWxpc3QnKS5maW5kKCcuYy1hYm91dF9fZWR1LWl0ZW0nKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRi1xyXG4gIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKTsvLyDQvdCw0YXQvtC00LjQvCDRgdC70LDQudC00Ysg0YEg0LrQu9Cw0YHRgdC+0LwgYWN0aXZlXHJcbiAgY2hpbGRyZW5JdGVtcyA9IGFjdGl2ZUl0ZW0uY2hpbGRyZW4oKVszXTtcclxuICBjb25zb2xlLmxvZyhjaGlsZHJlbkl0ZW1zKTtcclxuICAkKCcuYy1tb2RhbF9fY29udGFpbmVyJykuY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KTtcclxuICAkKCcuYy1tb2RhbF9faW1hZ2UnKS5hdHRyKCdzcmMnLGNoaWxkcmVuSXRlbXMuc3JjICk7XHJcbn0pO1xyXG5cclxuLy8gY2xvc2UgbW9kYWwgaW1hZ2UgYnV0dG9uXHJcbiQoJy5tb2RhbF9fYnVyZ2VyJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICB2YXIgaXRlbXMgPSAnJztcclxuICB2YXIgYWN0aXZlSXRlbSA9ICcnO1xyXG5cclxuICBpdGVtcyA9ICQoJy5jLWFib3V0X19lZHUtbGlzdCcpLmZpbmQoJy5jLWFib3V0X19lZHUtaXRlbScpOyAvLyDQvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLXHJcbiAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpO1xyXG4gIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICQoJy5jLW1vZGFsX19jb250YWluZXInKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XHJcbn0pO1xyXG4iXX0=
