function modalresizer() {
  $(".modal-window").each(function () {
    if ($(this).innerHeight() > $(window).height()) {
      $(this).addClass("js-window-absolut");
      var toppos = $(window).scrollTop();
      $(this).css({
        "top": toppos
      });
    } else {
      $(this).removeClass("js-window-absolut");
      var getheight = $(window).height();
      var getmodalheight = $(this).innerHeight();
      var gtx = getheight - getmodalheight;
      gtx = gtx / 2;
      $(this).css({
        "top": gtx
      });
    }
  });
}

function openmodal(artic) {
  modalresizer();

  if ($(".modal-window.js-active").length > 0) {
    $(".modal-window").animate({
      opacity: 0
    }, 500, function () {
      $(".modal-window").removeClass("js-active");

      $("#" + artic).addClass("js-active");
      $("#" + artic).animate({
        opacity: 1
      }, 500);

    });
  } else {
    $("#" + artic).addClass("js-active");
    $("#" + artic).animate({
      opacity: 1
    }, 500);
    $(".modal-shadow").addClass("js-active");
    $(".modal-shadow").animate({
      opacity: 0.8
    }, 500);
  }
}

$(document).ready(function () {
  $("body").prepend("<div class='modal-shadow'></div>");

  $(".modal-window").each(function () {
    $(this).prepend("<a href='' class='closemodal'></a>");
    $(this).addClass("js-window");
    modalresizer();
  });

  $("body").on("click", ".closemodal, .modal-shadow", function (event) {
    $(".modal-window, .modal-shadow").animate({
      opacity: 0
    }, 500, function () {
      $(".modal-window, .modal-shadow").removeClass("js-active");
    });
    event.preventDefault();
  });
  
  $(window).resize(function() {
    if ($(".modal-window.js-active").length > 0) {
      modalresizer();
    }
  });
  
});

