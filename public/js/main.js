var Clare = {};
$(function () {
  UI = {};

  // Scroll actions
  $(document).scroll(function () {
    var nav = $("header>nav");
    nav.toggleClass('scrolled', $(document).scrollTop() > 100);
    var btt = $("nav#back-to-top");
    btt.toggleClass('hidden', $(document).scrollTop() < 200)
    btt.toggleClass('transparent', $(document).scrollTop() < 200)
  });

  // Full-screen nav toggle
  UI.toggleFullScreenNav = function (nav) {
    nav.toggleClass('visible');
    if (nav.hasClass('visible')) {
      $("html, body").addClass('no-scroll');
    } else {
      $("html, body").removeClass('no-scroll');
    }
    $("header>nav").toggleClass('scrolled', nav.hasClass('visible'));
  }
  $('.toggle-menu').click(function () {
    var nav = $("nav#full-screen-nav");
    UI.toggleFullScreenNav(nav);
  });

  $(document).ready(function () {
    // Scroll to top
    $("button#back-to-top").click(function (e) {
      e.preventDefault();
      $("html, body").animate({scrollTop: 0}, 400);
    });

    // Scroll to anchor
    $("a.smooth-scroll").click(function (e) {
      e.preventDefault();
      if ($("nav#full-screen-nav").hasClass('visible')) {
        UI.toggleFullScreenNav($("nav#full-screen-nav"));
      }
      $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - 58}, 400);
    });
  });
});
