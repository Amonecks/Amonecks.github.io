$('.faq__item-icon').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.faq__item-content').eq(i).slideToggle('');
        $('.faq__item-icon').eq(i).toggleClass('faq__item-icon_active')
    })
});

$('.form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')



    data.append( 'Имя', 		$('[name="name"]', form).val() );
    data.append( 'Телефон', 		$('[name="phone"]', form).val() );
    data.append( 'Email', 		$('[name="email"]', form).val() );
    data.append( 'Комментарий', 		$('[name="comment"]', form).val() );
   
    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            alert('Отправлено');
        }
    });

    return false;
});

$("#phone").mask("(999) 999-9999");