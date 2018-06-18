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

    $("#pet-adoption").hide();
    $("#pet-adoption").trigger("reset");

  });
});
