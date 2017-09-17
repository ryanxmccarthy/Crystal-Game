var targetNumber = randomNumber();
var wins = 0;
var losses = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystalImages = ["http://images.clipartpanda.com/crystal-clipart-Crystals-occur-in-nature-2016012906.svg", 'https://www.bestcrystals.com/Content/Images/uploaded/NewFolder2/KyaniteImage.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sodalith_-_Rohstein.jpg/766px-Sodalith_-_Rohstein.jpg', 'http://24.media.tumblr.com/56d2cea9a56966fa3e1d26d559579c6b/tumblr_mv0wya4Kev1rmdrjqo1_400.png', 'http://www.billboard.com/files/media/05-crystals-billboard-2017-embed.jpg']

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