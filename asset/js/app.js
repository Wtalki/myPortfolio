$(function () {
  var flag = 0;

  $(".share").on("click", function () {
    if (flag == 0) {
      if ($(window).width() > 990) {
        $(this).siblings(".one").animate(
          {
            top: "100px",
            left: "50%",
          },
          200
        );

        $(this).siblings(".two").delay(200).animate(
          {
            top: "300px",
            left: "32%",
          },
          200
        );

        $(this).siblings(".three").delay(300).animate(
          {
            top: "300px",
            left: "68%",
          },
          200
        );
        $(this).siblings(".four").delay(300).animate(
          {
            top: "500px",
            left: "50%",
          },
          200
        );
      }
      if ($(window).width() <= 990) {
        $(this).siblings(".one").animate(
          {
            top: "150px",
            left: "50%",
          },
          200
        );
        $(this).siblings(".two").delay(200).animate(
          {
            top: "300px",
            left: "32%",
          },
          200
        );

        $(this).siblings(".three").delay(300).animate(
          {
            top: "300px",
            left: "68%",
          },
          200
        );
        $(this).siblings(".four").delay(300).animate(
          {
            top: "450px",
            left: "50%",
          },
          200
        );
      }
      if ($(window).width() <= 770) {
        $(this).siblings(".two").delay(200).animate(
          {
            top: "300px",
            left: "20%",
          },
          200
        );

        $(this).siblings(".three").delay(300).animate(
          {
            top: "300px",
            left: "80%",
          },
          200
        );
      }
      $(".one i,.two i, .three i").delay(500).fadeIn(200);
      $(".one p,.two p, .three p").delay(500).fadeIn(200);
      flag = 1;
    } else {
      $(".one, .two, .three, .four").animate(
        {
          top: "300px",
          left: "50%",
        },
        200
      );

      $(".one i,.two i, .three i").delay(500).fadeOut(200);
      $(".one p,.two p, .three p").delay(500).fadeOut(200);
      flag = 0;
    }
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".navBar nav").addClass("scrolled");
    } else {
      $(".navBar nav").removeClass("scrolled");
    }

    //scroll
    $windowHeight = window.scrollY;

    if ($windowHeight >= 1100) {
      $(".scrollTop").show();

      $(".scrollTop").click(function () {
        $(window).scrollTop(0);
      });
    } else if ($windowHeight <= 1100) {
      $(".scrollTop").hide();
    }
  });

  //content see more
  $(".see-more-btn").click(function () {
    var moreText = $(this).siblings(".more-text");
    console.log(moreText);
    $(moreText).fadeToggle(500);

    $(this).text(function (i, text) {
      return text === "See More" ? "See More" : "See Less";
    });
  });
  $(".photo-container").hover(
    function () {
      $(this).find(".photo").addClass("photo-zoom");
    },
    function () {
      $(this).find(".photo").removeClass("photo-zoom");
    }
  );
});
