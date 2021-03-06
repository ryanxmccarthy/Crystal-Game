var targetNumber = randomNumber();
var wins = 0;
var losses = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystalImages = ['http://24.media.tumblr.com/56d2cea9a56966fa3e1d26d559579c6b/tumblr_mv0wya4Kev1rmdrjqo1_400.png', 'http://www.soulfulcrystals.co.uk/wp-content/uploads/2013/11/crystals-shop.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Amethystemadagascar2.jpg/1200px-Amethystemadagascar2.jpg', 'https://ih1.redbubble.net/image.77231485.4569/flat,800x800,070,f.u4.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Am%C3%A9thystre_sceptre2.jpg/488px-Am%C3%A9thystre_sceptre2.jpg', 'https://www.photographingminerals.com/images/calcite_with_CPL.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsdvCGzW_7I8sc1cBWgovnVRD5aqsxI9q8BssLLMmxdeHZh3l4A', 'http://www.theworldofdesign.com/wp-content/uploads/2012/03/Rock-Crystal-Faceted-Kite-K200-1.jpg', 'https://moonrisecrystals.com/wp-content/uploads/2014/09/Gold-Rutile.jpg', 'https://www.capeminerals.co.za/Content/Images/uploaded/Blog/Phenakite.jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Phenakite-262069.jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Phenakite-ph0912b.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Selpologne.jpg/1124px-Selpologne.jpg']

function addWin() {
  $('#wins').text(wins);
}
function addLoss() {
  $('#losses').text(losses);
}
function randomNumber() {
  targetNumber =  Math.floor(Math.random() * (102) + 19);
}
function makeCrystals() {
  for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalImages[Math.floor(Math.random() * crystalImages.length)]);
    imageCrystal.attr("data-crystalvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);
    $("#crystals").append(imageCrystal);
  }
}
function init() {
  var counter = 0;
  $('#yourScore').text(counter);
  randomNumber();
  $('#scoreToMatch').text(targetNumber);
  $('#crystals').empty();
  makeCrystals();

  $(".crystal-image").on("click", function() {   
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $('#yourScore').text(counter);
    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      addWin();
      init();
    } else if (counter >= targetNumber) {
        alert("You lose!");
        losses++;
        addLoss();
        init();
      }
  });
}

init();