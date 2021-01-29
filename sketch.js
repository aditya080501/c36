var database;
var gameState=0;
var playerCount =0;
var form,player,game;
var allPlayers


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  
}
//.ref = stores the location of database
//.on = creates a continuous listner (read values from database)
//.set = writes the value into the data
//.update = update the value is given
function draw(){
  background("white");
  
   
  
}
