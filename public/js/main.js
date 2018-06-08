$(function () {
  UI = {};
  UI.viewportHeight = $(window).height();
  UI.viewportWidth = $(window).width();

  UI.init = function () {
    // ATF
    $("section#atf").css('height', UI.viewportHeight-$('header').height());
    $("section#atf").css('margin-top', $('header').height());
    setTimeout(function () {
      $("body").removeClass('loading');
    }, 250)
  }

  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
    $("header>nav").toggleClass('scrolled', nav.hasClass('visible'));
  }
  $('.toggle-menu').click(function () {
    var nav = $("nav#full-screen-nav");
    UI.toggleFullScreenNav(nav);
  });

  UI.init();
});
