$('.experience__carousel, .portfolio__carousel').slick({
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    dots: true
});

$('input[name=phone]').mask("+7 (999) 999-9999");

$('.contact__form').validate({
    rules: {
        name:  "required",
        phone:  "required",
    },
    messages: {
        name: " ",
        phone: " "
    }
});

// Анимация чисел в блоке aboutme


let result = false;
const aboutMe = document.getElementById('aboutme__items');
document.addEventListener('scroll', function() {
    const posTop = aboutMe.getBoundingClientRect().top;
    if(posTop <= 700 && result == false) {
        let works = 28,
        month = 15,
        webSites = 12,
        i = 0,
        iMax = Math.max(works, month, webSites),
        numberOfMonth = document.getElementById('numberOfMonth'),
        numberOfWebSites = document.getElementById('numberOfWebSites'),
        numberOfWorks = document.getElementById('numberOfWorks'),
        intervalNumber = setInterval(animationNumber, 20);
        function animationNumber(){
            i++;
            if(i <= works){
                numberOfWorks.innerHTML = i;
            }
            if(i <= month){
                numberOfMonth.innerHTML = i;
            }
            if(i <= webSites){
                numberOfWebSites.innerHTML = i;
            }
            if(i == iMax){
                clearInterval(intervalNumber);
            }
        };
        result = true;
    }
});