(function ($) {
  "use strict";

  // Mobile Menu

  var subMenu = $(".navbar-nav .sub-menu");

  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <i class="las la-angle-down"></i> </button>';
      });

    var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }


  // data-backround

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  //jQuery Sticky Area
  $(".sticky-area").sticky({
    topSpacing: 0,
  });

  //jQuery Animation
  new WOW().init();

  // Nice select
  $("select").niceSelect();

  //Progress Bar JS

  $("#bar1").barfiller({
    barColor: "#FFD857",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#FFD857",
    duration: 6000,
  });

  $("#bar3").barfiller({
    barColor: "#FFD857",
    duration: 7000,
  });

  $("#bar4").barfiller({
    barColor: "#FFD857",
    duration: 5000,
  });

  $("#bar5").barfiller({
    barColor: "#FFD857",
    duration: 6000,
  });

  $("#bar6").barfiller({
    barColor: "#FFD857",
    duration: 7000,
  });

  // Circle Progress

  $("#circle_progress").circleProgress({
    value: 0.9,
    thickness: 3,
    size: 122,
    fill: "#061815",
  });

  $("#circle_progress_two").circleProgress({
    value: 0.5,
    thickness: 3,
    size: 122,
    fill: "#061815",
  });

  $("#circle_progress_three").circleProgress({
    value: 0.7,
    thickness: 3,
    size: 122,
    fill: "#061815",
  });

  // Contact Form JS

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var $action = $(this).prop("action");
    var $data = $(this).serialize();
    var $this = $(this);

    $this.prevAll(".alert").remove();

    $.post(
      $action,
      $data,
      function (data) {
        if (data.response == "error") {
          $this.before(
            '<div class="alert alert-danger">' + data.message + "</div>"
          );
        }

        if (data.response == "success") {
          $this.before(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
          $this.find("input, textarea").val("");
        }
      },
      "json"
    );
  });
})(window.jQuery);
