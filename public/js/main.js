(function () {
  UI = {};
  UI.viewportHeight = $(window).height();
  UI.viewportWidth = $(window).width();
  UI.fullScreenNav = $("nav#full-screen-nav");

  UI.init = function () {
    // ATF
    $("section#atf").css('height', UI.viewportHeight-$('header').height());
    $("section#atf").css('margin-top', $('header').height());
    setTimeout(function () {
      $("body").removeClass('loading');
    }, 200)
  }

  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
    $("header>nav").toggleClass('scrolled', nav.hasClass('visible'));
  }

  $('.toggle-menu').click(function () {
    var nav = $("nav#full-screen-nav");
    UI.toggleFullScreenNav(nav);
  });

  $(window).scroll(function (e, ui) {
    if ($(document).scrollTop() > 30) {
      $('header').addClass('scrolling');
    } else {
      $('header').removeClass('scrolling');
    }
  });

  UI.fullScreenNav.find('a').click(function (e, ui) {
    UI.toggleFullScreenNav(UI.fullScreenNav);
  });

})();

$(document).ready(function () {
  UI.init();
});
