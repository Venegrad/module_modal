function modalresizer() {
  $(".modal-window.modal-window_active").removeClass("modal-window_absolute");
  $("body").removeClass("modal-window_active");
  if ($(".modal-window.modal-window_active").innerHeight() > ($(window).height() - ($(window).height() * 0.1))) {
    $(".modal-window.modal-window_active").addClass("modal-window_absolute");
    $("body").addClass("modal-window_active");
  } else {
    var getheight = $(window).height();
    var getmodalheight = $(".modal-window.modal-window_active").innerHeight();
    var gtx = getheight - getmodalheight;
    gtx = gtx / 2;
    $(".modal-window.modal-window_active").css({
      "top": gtx
    });
  }
}

function openmodal(artic) {
  if ($(".modal-window.modal-window_active").length > 0) {
    $(".modal-window.modal-window_active").animate({
      opacity: 0
    }, 500, function () {
      $(".modal-window.modal-window_active").removeClass("modal-window_active modal-window_absolute");
      $("#" + artic).addClass("modal-window_active");
      modalresizer();
      $("#" + artic).animate({
        opacity: 1
      }, 500);
    });
  } else {
    $("#" + artic).addClass("modal-window_active");
    modalresizer();
    $("#" + artic).animate({
      opacity: 1
    }, 500);
    $(".modal-shadow").addClass("modal-window_active");
    $(".modal-shadow").animate({
      opacity: 0.8
    }, 500);
  }
}

function closemodal() {
  $(".modal-window, .modal-shadow").animate({
    opacity: 0
  }, 500, function () {
    $(".modal-window, .modal-shadow").removeClass("modal-window_active");
  });
}

$(document).ready(function () {
  
  $("body").prepend("<div class='modal-shadow'></div>");

  $(".modal-window").each(function () {
    $(this).prepend("<a href='' class='modal-window__close-modal'></a>");
  });

  $("body").on("click", ".modal-window__close-modal, .modal-shadow", function (e) {
    closemodal();
    e.preventDefault();
  });
  
  $(window).resize(function() {
    if ($(".modal-window.modal-window_active").length > 0) {
      modalresizer();
    }
  });
  
});

