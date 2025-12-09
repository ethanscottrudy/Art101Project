
const stickerArray = [
    "blueCrescentStar","blueMoon","blueMusicNote","blueSquare",
    "blueStarSilhouette","greenCircle","greenSproutSilhouette",
    "orangeHeartSilhouette","orangeHeartTrio","orangeNote","pinkStarSilhouette",
    "purpleMoonSilhouette","purpleRubble","purpleStar","redFlower","redSwoosh",
    "yellowCrown", "blackCat", "paperMoon", "whiteFlower", "yellowSparkle", "yellowSun", 
    "purpleGreenFlowers", "moonPhases", "orangeButton", "blueBox", 
    "blueShoe", "blueShape", "blueHeart", "blueFire"
];



const wholeBook = {
    titlePage:
    `<img src="buttonIcons/start.PNG" class="nextPage" id="startButton">`,
    exampleA:
    `<img src="buttonIcons/next.PNG" class="nextPage nextButton">
    <img src="buttonIcons/back.PNG" class="prevPage prevButton">`,
    exampleB:`
    <img src="buttonIcons/next.PNG" class="nextPage nextButton">
    <img src="buttonIcons/back.PNG" class="prevPage prevButton">`,
    scrapbook:`
    <img src="buttonIcons/next.PNG" class="nextPage nextButton">
    <img src="buttonIcons/back.PNG" class="prevPage prevButton">
    <input id="colorPickerBG" type="color" value="#DBC8C8">
    <div id="stickerBox">
    </div>
    <img src="A5D0B35B-9EBF-4214-BAF0-3FE28AEAEF02.PNG" id="randoStickers">
    <div id="stickerBG"></div>`,
    reverseCover:
    `<img src="buttonIcons/next.PNG" class="nextPage nextButton">
    <img src="buttonIcons/back.PNG" class="prevPage prevButton">`,
    
};

var properties = Object.keys(wholeBook);

var currentIndex = 0;

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

function renderCurrentPage() {
    if (properties.length > 0) {
        var currentKey = properties[currentIndex];
        var currentValue = wholeBook[currentKey];
        $('body').attr('id', currentKey);
        $('body').html(currentValue);
    }
};

$(document).on('click','.nextPage', function nextPage() {
            if (properties.length > 0) {
                currentIndex = (currentIndex + 1) % properties.length;
                renderCurrentPage();
            } else {
                $('body').html("<p>Object has no properties.</p>");
            
            }
        });

$(document).on('click','.prevPage', function prevPage() {
            if (properties.length > 0) {
                currentIndex = (currentIndex - 1 + properties.length) % properties.length;
                renderCurrentPage();
            } else {
                $('body').html("<p>Object has no properties.</p>");
            
            }
            console.log(currentValue)
            return currentValue
        });

// courtesy of noahgelmen on the CSS Tricks forum. https://css-tricks.com/forums/topic/cursor-position-on-draggable-element/
//                 |
//                 V
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

renderCurrentPage();