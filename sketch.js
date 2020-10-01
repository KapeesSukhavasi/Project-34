var dog, happyDog;
var database;
var foodS, foodStock;

function preload() {
  dog.loadImage("images/dog.png");
  happyDog.loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,300,50,50);
  dog.addImage(dog);

  database = firebase.database;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(color(46,139,87));

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
    firebase.database('Food').val() = firebase.database('Food').val() - 1;
  }

  drawSprites();

  text("Food Stock: " + foodStock,200,150);
}



