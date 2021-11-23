$(document).ready(function(){
    $('.modelsone__slider').slick({
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                arrows: false
              }
            },
            {
              breakpoint: 376,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 351,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });  
    $('.modelstwo__slider').slick({
        centerMode: true,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false
              }
            },
            {
              breakpoint: 376,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 351,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });  
});