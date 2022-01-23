$(document).ready(function(){
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top});
                return false;
        });
    });

    $('.button').on('click', function(){
        $('.modal').fadeIn('slow');
        $('.overlay').fadeIn('slow');
    });

    $('.modal__close').on('click', function(){
        $('.modal').fadeOut('slow');
        $('.overlay').fadeOut('slow');
    });

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $('.modal__form').validate({
        rules: {
            name:  "required",
            phone:  "required"
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите cвой номер телефона",
          }
    });
    $('.promo__header-humb').on('click', function(){
        $('.promo__header-mobil-menu').fadeToggle();
        $('.promo__header-humb').toggleClass('promo__header-humb-active');
    });
    $('.plan__item').on('click', function() {
        $(this)
          .addClass('plan__item-active').siblings().removeClass('plan__item-active')
          .closest('.plan__wrapper').find('.plan__img').removeClass('plan__img-active').eq($(this).index()).addClass('plan__img-active');
      });

});