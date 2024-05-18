let isRed = false;

$(document).on("click", "#redshift-btn", function(){

    if (!isRed) {
        $('#img1').attr('src','images/art/red-bird.jpg');
        $('#img2').attr('src','images/art/red-flowers.jpg');
        $('#img3').attr('src','images/art/red-hand.jpg');
        $('#img4').attr('src','images/art/red-ducks.jpg');
        $('#img5').attr('src','images/art/red-reflection.jpg');
        $('#img6').attr('src','images/art/red-cactus.jpg');

        $("h1").css('color', 'red');
        $("figcaption").css('color', 'red');

        isRed = true;
    }
    else if (isRed) {
        $('#img1').attr('src','images/art/bird-and-fish.jpg');
        $('#img2').attr('src','images/art/flowers-cool.jpg');
        $('#img3').attr('src','images/art/purple-trees.jpg');
        $('#img4').attr('src','images/art/ducks.jpg');
        $('#img5').attr('src','images/art/glass-panes.jpg');
        $('#img6').attr('src','images/art/elevator.jpg');

        $("h1").css('color', '#eeeeee');
        $("figcaption").css('color', '#eeeeee');

        isRed = false;
    }

    
});

// pixel value for smaller media queries
// esp for smaller text/utility text