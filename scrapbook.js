
const stickerArray = [
    "blueCrescentStar","blueMoon","blueMusicNote","blueSquare",
    "blueStarSilhouette","greenCircle","greenSproutSilhouette",
    "orangeHeartSilhouette","orangeHeartTrio","orangeNote","pinkStarSilhouette",
    "purpleMoonSilhouette","purpleRubble","purpleStar","redFlower","redSwoosh","yellowCrown"
];

function randomizeStickerSheet() {
for(var i = 0; i < 15; i++) {
const random = Math.floor(Math.random() * stickerArray.length);
$("#stickerBox").append(`<img src="stickerSheets/${stickerArray[random]}Sticker.png" class="sticker"></img>`)
console.log(random, stickerArray[random]) 
};  
};

function changeBGColor() { 
        let selectedColor = $("#colorPickerBG").val();
        $("#stickerBG").css("background-color", selectedColor);
        console.log(selectedColor)
        return selectedColor
};
// courtesy of noahgelmen on the CSS Tricks forum. https://css-tricks.com/forums/topic/cursor-position-on-draggable-element/
//                 |
//                 V
function pickupSticker (e) {

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
};

$(document).ready(randomizeStickerSheet);

$('.sticker').on('mousedown', pickupSticker);

$("#colorPickerBG").change(changeBGColor);