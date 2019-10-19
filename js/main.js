$(document).ready(function() {
    // console.log('12345');
    changeColor();

    // selektor znacznika
    var allP = $('p');
    allP.css('color', '#00f');

    // console.log(allP);
    var allGreen = $('.green');
    allGreen.css('color', 'green');
    
    // metoda text
    console.log(allP.text());
    // allP.text('12345');

    // metoda html
    console.log($('.html').html());
    $('.html').html('<p>123456</p>');

    // dodawanie tresci
    // w kazdym przypadku,  mozemy dodawac znaczniki html
    // w danym selektorze na poczatku
    $('#container').prepend('<p class="prepend">Prepend</p>');

    // w danym selektorze na koncu
    $('#container').append('<p class="append">Append</p>');

    // przed danym selektorem
    $('#container').before('<div class="before">12345</div>');

    // za danym selektorem
    $('#container').after('<div class="after">12345</div>');

    // usuwanie tresci - usuwa wezel tekstowy
    $('#delete p').empty();

    // usuwanie tresci - usuwa caly element
    $('#delete p').remove();

    // var deleteText = $('#delete p').text();
    // console.log(deleteText);
    // z wlasciwoscia - get
    console.log($('.css p').css('color'));

    // wlasciwosc, wartosc - set
    // wlasciwosc: wartosc - set
    $('.css p').css('color', 'pink');

    $('.css').css({
        width: '50%',
        backgroundColor: 'brown',
    })

    // metoda val
    // bez parametru - get wartosc
    console.log($('form input:first-of-type').val());

    // z parametrem - set wartosc
    $('form input:first-of-type').val('Marcin');

    // dodawanie usuwanie klas
    $('form').addClass('formularz pierwszy');
    $('form').removeClass('pierwszy');
    // $('form').toggleClass('pierwszy');

    // find
    $('.find').find('span').css('font-size', '40px');

    //each() - dla kazdego
    // $('nav li').each(function() {
    //     $(this).click(function() {
    //         $(this).find('a').css('color', 'violet');
    //     })
    // });

    // on - laczenie zdarzen
    $('nav li').on({
        'click': function() {
            $(this).find('a').css('color', 'violet');
        },
        'mouseenter': function() {
            $(this).find('a').css('font-size', '20px');
        },
        'mouseleave': function() {
            $(this).find('a').css('font-size', '16px');
        },
    })

    $('nav').hide(4000, function() {
        $('body').addClass('klasa');
    }).show(4000, function() {
        $('body').removeClass('klasa');
    });

    // fade
    $('.fade').fadeOut(4000).delay(2000).fadeIn(4000);

    // $('#slide').click(function() {
    //     // $('.slide').slideUp(1000);
    //     $('.slide').slideToggle(1000);
    // })

    $('#slide').click(function() {
        $('.slide').animate({
            width: '50%',
            height: '150px'
        }, 1000, animateHeight)
    });
});

//first jquery function
function changeColor() {
    // selektor id
    $('#first').css('background-color', 'red').hide('slow').show(3000);
}

function animateHeight() {
    $('.slide').animate({
        height: '300px',
    }, 1000, costam) //ostatni parametr to callback
}

function costam() {

}