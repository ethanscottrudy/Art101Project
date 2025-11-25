//on down press
    //make object follow mouse
//on release
    //object stops

//display one sticker sheet
//button that on click
// courtesy of noahgelmen on the CSS Tricks forum. https://css-tricks.com/forums/topic/cursor-position-on-draggable-element/
//                 |
//                 V
$('.sticker').on('mousedown', function (e) {
    
    var $this = $(this);

    $this.addClass('active');
    
    var oTop = e.pageY - $('.active').offset().top;
    var oLeft = e.pageX - $('.active').offset().left;
    
    $(this).parents().on('mousemove', function (e) {

        $('.active').offset({

            top: e.pageY - oTop,
            left: e.pageX - oLeft

        })
             
    });
    
    $('body').on('mouseup', function () {

        $this.removeClass('active');
        $('body').unbind('mouseup');

    });
    
    return false;    
});
