let titleWrapper = document.getElementsByClassName('promo__title-item');

function animationTitle(){
    titleWrapper[Math.floor(Math.random() * 14)].classList.add('promo__title-item-active');
    let backRotate = setTimeout(animationTitleStop, 1000);
    function animationTitleStop(){
        for(let item = 0; item < 15; item++){
            if(titleWrapper[item].classList.contains('promo__title-item-active')){
                titleWrapper[item].classList.remove('promo__title-item-active');          
                clearTimeout(backRotate);
                animationTitle();
                break;                 
            } 
        }
    }
};

animationTitle();

