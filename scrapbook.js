
const stickerArray = [
    "blueCrescentStar","blueMoon","blueMusicNote","blueSquare",
    "blueStarSilhouette","greenCircle","greenSproutSilhouette",
    "orangeHeartSilhouette","orangeHeartTrio","orangeNote","pinkStarSilhouette",
    "purpleMoonSilhouette","purpleRubble","purpleStar","redFlower","redSwoosh",
    "yellowCrown", "blackCat", "paperMoon", "whiteFlower", "yellowSparkle", "yellowSun", 
    "purpleGreenFlowers", "moonPhases", "newspaperCat", "orangeButton", "blueBox", 
    "blueShoe", "blueShape", "blueHeart", "blueFire"
];
const pageTitle = [
    "landingPage","showcase","scrapbook","reverseCover"
]

const wholeBook = {
    titlePage:
    `<body id="landingPage">
    </body`,
    showcase:
    `<body id="showcase"></body>`,
    scrapbook:`
    <input id="colorPickerBG" type="color" value="#DBC8C8">
    <div id="stickerBox">
    </div>
    <button id="randoStickers">Shuffle</button>
    <div id="stickerBG"></div>`,
    reverseCover:
    `<body id="reverseCover"></body>`
};

function turnPageForward() {
$("body").attr("id",pageTitle[2])
$("body").html(wholeBook.scrapbook)
console.log(wholeBook.scrapbook)
console.log(pageTitle[2])
};

function randomizeStickerSheet() {
$("#stickerBox").html("")
for(var i = 0; i < 15; i++) {
const random = Math.floor(Math.random() * stickerArray.length);
const stickerHTML = `<img src="stickerSheets/${stickerArray[random]}Sticker.png" class="sticker">`
$("#stickerBox").append(stickerHTML)
console.log(stickerHTML)
};
};

function changeBGColor() { 
        let selectedColor = $("input").val();
        $("#stickerBG").css("background-color", selectedColor);
        console.log(selectedColor)
        return selectedColor
};
// courtesy of noahgelmen on the CSS Tricks forum. https://css-tricks.com/forums/topic/cursor-position-on-draggable-element/
//                 |
//                 V
$(document).on('click','#pageTurn',turnPageForward)
$(document).on('click','#startButton',turnPageForward)
$(document).on('click','#randoStickers',randomizeStickerSheet);
$(document).on('change','#colorPickerBG',changeBGColor);
$(document).on('mousedown','.sticker', function (e) {

    var $this = $(this);

    $this.addClass('active');

    var oTop = e.pageY - $('.active').offset().top;
    var oLeft = e.pageX - $('.active').offset().left;

    $this.parents().on('mousemove', function (e) {

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
