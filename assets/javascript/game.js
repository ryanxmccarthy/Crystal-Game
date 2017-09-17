function randomIntFromInterval() {
    return Math.floor(Math.random() * (102) + 19);
}

var targetNumber = randomIntFromInterval();

$("#scoreToMatch").text(targetNumber);

var counter = 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var i = 0; i < 4; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
  imageCrystal.attr("data-crystalvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);
  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {   
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  $('#yourScore').text(counter);
  if (counter === targetNumber) {
    alert("You win!");
  }
  else if (counter >= targetNumber) {
    alert("You lose!!");
  }
});