$(document).on("click", "#redshift-btn", function(){
    $('#img1').attr('src','images/art/red-bird.jpg');
    $('#img2').attr('src','images/art/red-flowers.jpg');
    $('#img3').attr('src','images/art/red-hand.jpg');
    $('#img4').attr('src','images/art/red-ducks.jpg');
    $('#img5').attr('src','images/art/red-reflection.jpg');
    $('#img6').attr('src','images/art/red-cactus.jpg');

    $("h1").css('color', 'red');
    $("figcaption").css('color', 'red');
});