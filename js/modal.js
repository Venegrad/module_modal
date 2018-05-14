
function openmodal(artic) {
  $("body").addClass("modal-window_active");
  if ($(".modal-window.modal-window_active").length > 0) {
    $(".modal-window.modal-window_active").animate({
      opacity: 0
    }, 500, function () {
      $(".modal-window.modal-window_active").removeClass("modal-window_active modal-window_absolute");
      $("#" + artic).addClass("modal-window_active");

      $("#" + artic).animate({
        opacity: 1
      }, 500);
    });
  } else {
    $("#" + artic).addClass("modal-window_active");
    $("#" + artic).animate({
      opacity: 1
    }, 500);
  }
}

function closemodal() {
  $(".modal-window").animate({
    opacity: 0
  }, 500, function () {
    $(".modal-window, body").removeClass("modal-window_active");
  });
}

$(document).ready(function () {
  
  $(".modal-window").each(function () {
    var getattr = $(this).attr("data-width");
    $(this).wrapInner("<div class='modal-window__wrap' style='max-width: "+getattr+";'></div>");
    $(this).find(".modal-window__wrap").prepend("<a href='' class='modal-window__close-modal'></a>");
  });

  $("body").on("click", ".modal-window__close-modal", function (e) {
    closemodal();
    e.preventDefault();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      closemodal();
    }
  });
  
});

