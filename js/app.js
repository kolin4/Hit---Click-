$(function(){


//Dzwieki
    let shot = new Audio('../sounds/shot-short.mp3');
    let ammoOut = new Audio('../sounds/ammo-empty.wav');
    let reload1 = new Audio('../sounds/reload-nowy.mp3');
    let reload2 = new Audio('../sounds/reload-nowy2.mp3');




// event
    let btn = $('#start');

    btn.on('click', function(event){
        event.stopPropagation();

        // shot.play();

        $('.start').hide();
        $('.game').show();

    })

    var ammo = 5;
$('.game').on('click', function(event){
    event.stopPropagation();
    if ( ammo > 0) {
        shot.play();
        $('.bullet').find('img').eq(ammo - 1).hide();
        ammo -= 1;
    } else {
        ammoOut.play();

    }

})
$(document).on('keyup', function(event){
    if ( event.which == 82 ){

        reload2.play();
        ammo = 5;
        $('.bullet').find('img').show();
    }

})

let wynik = 0;
$('.score3').on('click', function(e){
    e.stopPropagation();
    wynik += parseInt($(this).attr('data-score'));
    $('.score').find('span').text(wynik);

    if ( ammo > 0) {
        shot.play();
        $('.bullet').find('img').eq(ammo - 1).hide();
        ammo -= 1;
    } else {
        ammoOut.play();
}
})

$('.score4').on('click', function(e){
    e.stopPropagation();
    wynik += parseInt($(this).attr('data-score'));
    $('.score').find('span').text(wynik);

    if ( ammo > 0) {
        shot.play();
        $('.bullet').find('img').eq(ammo - 1).hide();
        ammo -= 1;
    } else {
        ammoOut.play();
    }
})



})
