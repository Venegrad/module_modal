function modalresizer() {
  $(".modal-window.js-active").removeClass("js-window-absolute");
  $("body").removeClass("overflow-owt");
  if ($(".modal-window.js-active").innerHeight() > ($(window).height() - ($(window).height() * 0.1))) {
    $(".modal-window.js-active").addClass("js-window-absolute");
    $("body").addClass("overflow-owt");
  } else {
    var getheight = $(window).height();
    var getmodalheight = $(".modal-window.js-active").innerHeight();
    var gtx = getheight - getmodalheight;
    gtx = gtx / 2;
    $(".modal-window.js-active").css({
      "top": gtx
    });
  }
}

function openmodal(artic) {
  if ($(".modal-window.js-active").length > 0) {
    $(".modal-window.js-active").animate({
      opacity: 0
    }, 500, function () {
      $(".modal-window.js-active").removeClass("js-active js-window-absolute");
      $("#" + artic).addClass("js-active");
      modalresizer();
      $("#" + artic).animate({
        opacity: 1
      }, 500);
    });
  } else {
    $("#" + artic).addClass("js-active");
    modalresizer();
    $("#" + artic).animate({
      opacity: 1
    }, 500);
    $(".modal-shadow").addClass("js-active");
    $(".modal-shadow").animate({
      opacity: 0.8
    }, 500);
  }
}

function closemodal() {
  $(".modal-window, .modal-shadow").animate({
    opacity: 0
  }, 500, function () {
    $(".modal-window, .modal-shadow").removeClass("js-active");
  });
}

$(document).ready(function () {
  
  $("body").prepend("<div class='modal-shadow'></div>");

  $(".modal-window").each(function () {
    $(this).prepend("<a href='' class='closemodal'></a>");
  });

  $("body").on("click", ".closemodal, .modal-shadow", function (e) {
    closemodal();
    e.preventDefault();
  });
  
  $(window).resize(function() {
    if ($(".modal-window.js-active").length > 0) {
      modalresizer();
    }
  });
  
});

