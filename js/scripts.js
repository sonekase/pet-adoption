// Business logic
function Animal (name, breed, picture, status) {
  this.name = name;
  this.breed = breed;
  this.picture = picture;
  this.status = status;
};

var tiger = new Animal ("Sing", "Bengal tiger", "img/tiger.jpg", "Available");
var crocodile = new Animal ("Toothy", "Colombian river crocodile","img/crocodile.jpg", "Available");
var orca = new Animal ("Lolly", "Seattle sea orca","img/orcas.jpg", "Available");
var otters = new Animal ("Triplet", "Sea otter","img/otters.jpg", "Available");
var panda = new Animal ("Po", "Kung fu Panda","img/pandas.jpg", "Available");
var bear = new Animal ("Polly", "Polar bear","img/polarbear.jpg", "Available");

var arrayAnimals = [tiger, crocodile, orca, otters, panda, bear];

// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);






//User interface logic
$(document).ready(function() {
  $("button#add-animal").click(function() {
    $("#pet-adoption").show();
  });
  $("#pet-adoption").submit(function(event) {
    event.preventDefault();
    var animalName = $("#input-name").val();
    var animalBreed = $("#input-breed").val();
    var animalPicture = $("#input-picture").val();

    var newAnimal = new Animal (animalName, animalBreed, animalPicture, "Available");

    arrayAnimals.push(newAnimal);

    $("#pet-adoption").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    // $("#pet-adoption").trigger("reset");
    $("#pet-adoption").hide();


  });
});
