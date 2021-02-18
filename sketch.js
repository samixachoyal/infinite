var horse,horseImage;
var invis;
var villainsGroup,vi1,vi2,vi3,vi4,vi5,vi6,vi7,vi8,vi9,vi10,vi11;
var sound;
var play = 1;
var end = 0;
var gameState = 1;
var backgroundImg;

function preload(){   
  
horseImage = loadImage("horse.gif");
  
vi1 = loadImage("vi1.png");
  
vi2 = loadImage("vi2.png");
  
vi3 = loadImage("vi3.png");
  
vi4 = loadImage("vi4.png");
  
vi5 = loadImage("vi5.png");
  
vi6 = loadImage("vi6.png");
  
vi7 = loadImage("vi7.png");
  
vi8 = loadImage("vi8.png");
  
vi9 = loadImage("vi9.png");
  
vi10 = loadImage("vi10.png");
  
vi11 = loadImage("vi11.png");
  
sound = loadSound("unicorn.mp3");

backgroundImg = loadImage("unicorn.jpg")
  
}

function setup() {
  
createCanvas(1200,900);
  
sound.loop();
  
horse = createSprite(50,850,20,20);
horse.addImage(horseImage);
horse.scale = 0.2;
  
invis = createSprite(100,850,200,10);
invis.visible = false;
  

villainsGroup = new Group();
  
score = 0;

}

function draw() {

  background(backgroundImg);

if(gameState === play){  
  

villains();
  
if(horse.isTouching(villainsGroup)){
  
gameState = end;
  
}
}

  
if(( keyDown("space"))&& horse.y >= 225){
  
horse.velocityY = -12;
    
}
  
horse.velocityY = horse.velocityY + 0.8;
  
  
horse.collide(invis);

drawSprites();
  
if (gameState === end){
villainsGroup.visible = false;
villainsGroup.destroyEach();

stroke("blue");
fill("red");
textSize(15);
text("GAMEOVER😦!!!",200,225);
  
}
}

function  villains(){

if(frameCount%160==0){
var villain = createSprite(400,375,10,40);
villain.velocityX = -3;
  
var rand = Math.round(random(1,11));
switch(rand) {
case 1: villain.addImage(vi1);
villain.scale = 0.4;
break;
case 2: villain.addImage(vi2);
villain.scale = 0.05;
break;
case 3: villain.addImage(vi3);
villain.scale = 0.2;
break;
case 4: villain.addImage(vi4);
villain.scale = 0.4;
break;
case 5: villain.addImage(vi5);
villain.scale = 0.4;
break;
case 6: villain.addImage(vi6);
villain.scale = 0.5;
break;
case 7: villain.addImage(vi7);
villain.scale = 0.07;
break;
case 8: villain.addImage(vi8);
villain.scale = 0.4;
break;
case 9: villain.addImage(vi9);
villain.scale = 0.4;
break;
case 10: villain.addImage(vi10);
villain.scale = 0.1;
break;
case 11: villain.addImage(vi11);
villain.scale = 0.4;
break;
default: break;

}
villain.lifetime = 150;
villainsGroup.add(villain);
}
}