$(document).ready(function(){
      $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top - 100});
                return false;
        });
    });
    $('.works__more-mobil').on('click', function(){
        $('.works').toggleClass('works_mblm');
        $('.works__more-mobil').fadeOut();
        $('.works__less-mobil').fadeIn();
    });
    $('.works__less-mobil').on('click', function(){
      $('.works').toggleClass('works_mblm');
      $('.works__more-mobil').fadeIn();
      $('.works__less-mobil').fadeOut();
  });
    $('.works__more').on('click', function(){
        $('.works').addClass('works_snd');
        $('.works__more').fadeOut();
        $('.works__more-snd').fadeIn();
        $('.works__less').fadeIn();
    });
    $('.works__more-snd').on('click', function(){
      $('.works').addClass('works_trd');
      $('.works__more-snd').fadeOut();
      $('.works__less').fadeOut();
      $('.works__less-snd').fadeIn();
    });
    $('.works__less').on('click', function(){
      $('.works').removeClass('works_snd');
      $('.works__more-snd').fadeOut();
      $('.works__less').fadeOut();
      $('.works__more').fadeIn();
      $('html, body').animate({
        scrollTop: $(".works").offset().top
      }, 1000);
    });
    $('.works__less-snd').on('click', function(){
      $('.works').removeClass('works_trd');
      $('.works__more-snd').fadeIn();
      $('.works__less').fadeIn();
      $('.works__less-snd').fadeOut();
      $('html, body').animate({
        scrollTop: $(".scrolling").offset().top
      }, 1000);
    });
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
    )
    wow.init();
    $('.header__humburger').on('click', function(){
      $('.header__panel').toggleClass('header__panel_active')
    });

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $('.application__form').validate({
      rules: {
          name:  "required",
          phone:  "required",
          email: {
              required: true,
              email: true
          }
      },
      messages: {
          name: "Пожалуйста, введите своё имя",
          phone: "Пожалуйста, введите cвой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адресс почты"
          }
        }
  });

    $(document).on("scroll", onScroll);
    function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('#menu a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top - 200 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('#menu ul li a').removeClass("header__link_active");
              currLink.addClass("header__link_active");
          }
          else{
              currLink.removeClass("header__link_active");
          }
      });
  }

});