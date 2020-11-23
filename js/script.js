$(document).ready(function() {
  //список переменных
  const btnBurger = $('.header__burger'),
    menu = $('.header__menu_container'),
    btnCloseMenu = $('.header__menu_btn-close'),
    btnCurrency = $('.header__currency_btn'),
    eur = $('.eur'),
    usd = $('.usd');


  //функции отключения и включения скролла
  function scrollOff() {
    $('html,body').css('overflow', 'hidden');
  }
  function scrollOn() {
    $('html,body').css('overflow', 'visible');
  }

  //открыть всплывающее меню
  btnBurger.on('click', function() {
    menu.addClass('menu-open');
    btnCloseMenu.addClass('menu-open');
    scrollOff();
  });

  //закрыть всплывающее меню
  btnCloseMenu.on('click', function() {
    menu.removeClass('menu-open');
    scrollOn();
  });

  //запрос курсa валют
  btnCurrency.on('click', function() {
    $.get('http://data.fixer.io/api/2020-03-23',
    {'access_key': 'bd40a47779f9036a34d213e49d700ef7'},
    function(response) {
      console.log(response);

      const euro = (response.rates.RUB);
      const dollar = (response.rates.RUB/response.rates.USD);

      eur.html(euro.toFixed(2));
      usd.html(dollar.toFixed(2));
    });
  });
});
