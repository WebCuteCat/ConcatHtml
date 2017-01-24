'use strict'

$(document).ready(function() {
	$('#slider1').bxSlider({
    nextText: '',
    prevText: '',
		buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '<div class="switch-pages"></div>';
      case 1:
        return '<div class="switch-pages"></div>';
      case 2:
        return '<div class="switch-pages"></div>';
      case 3:
        return '<div class="switch-pages"></div>';
    }
  }
	});

	$('#slider2').bxSlider({
    nextText: '',
    prevText: '',
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 360,
    slideMargin: 10,
    moveSlides: 1
	});

  $('#slider3').bxSlider({
    nextText: '',
    prevText: '',
    buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '';
      case 1:
        return '';
      case 2:
        return '';
      case 3:
        return '';
    }
  }
  });

  $('.services-block').hover(function() {
    $('.dropdown-list').show(200);
    $('.services-block').addClass('services-block-focus');
  });

  $('.search-block, .logo-contacts, .sections, slider-block, .main, .catalog, .clients, .slider-bg').hover(function() {
    $('.dropdown-list').hide(150);
    $('.services-block').removeClass('services-block-focus');
  });

  $('.popup-cancel').click(function() {
    $('#request-call').modal('hide');
    $('#checkout').modal('hide');
  });

  $('input, select').styler();

});

var myMap;
  ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
  function init () {
  //   myMap = new ymaps.Map("map", {
  //     center: [56.011, 37.479], // Координаты центра карты
  //     zoom: 16 // Zoom
  //   });
  //   myGeoObject = new ymaps.GeoObject({
  //       geometry: {
  //           type: "Point",// тип геометрии - точка
  //           coordinates: [56.011, 37.479] // координаты точки
  //      }
  //   });
  // myMap.geoObjects.add(myGeoObject); // Размещение геообъекта на карте.
        var myMap = new ymaps.Map("map", {
        center: [56.011, 37.479],
        zoom: 16
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",// тип геометрии - точка
                coordinates: [56.0118, 37.4788] // координаты точки
           }
        });
myMap.geoObjects.add(myGeoObject); // Размещение геообъекта на карте.
  }