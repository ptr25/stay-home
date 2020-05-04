var home,homeimg,corona1 , corona2,corona3, coronaimg;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,
    maze10,maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,
    maze19,maze20,maze21;
var man,woman,child,manimg,womanimg,childimg;

function setup() {
  createCanvas(650,400);
  homeimg = loadImage("home.jpg");
  manimg = loadImage("man.png");
  womanimg = loadImage("woman.png");
  childimg = loadImage("child.png");
  coronaimg = loadImage("corona.png");
  home = createSprite(430,180,10,10);
  man = createSprite(330,70,10,10);
  woman = createSprite(215,130,10,10);
  child = createSprite(220,260,10,10);
  corona1 = createSprite(75,130,10,10);
  corona2 = createSprite(120,30,10,10);
  corona3 = createSprite(120,280,10,10);
  explosion = loadSound("explosion.mp3");

}

function draw() {

background(50,20,100);  
home.addImage(homeimg);
home.scale = 0.2;
man.addImage(manimg);
man.scale = 0.35;
woman.addImage(womanimg);
woman.scale = 0.09;
woman.setCollider("circle",0,0,10);
man.setCollider("rectangle",10,10,50,200);
child.setCollider("circle",0,0,10);
child.addImage(childimg);
child.scale = 0.09;
corona1.addImage(coronaimg);
corona1.scale = 0.1;
corona2.addImage(coronaimg);
corona2.scale = 0.1;
corona3.addImage(coronaimg);
corona3.scale = 0.1;
corona1.velocityX = 2;
corona2.velocityX = 2;
corona3.velocityX = 2;
if(corona1.isTouching(woman)){
  woman.destroy();
  corona1.destroy();
  explosion.play();
}
else{
  explosion.stop();
}
if(corona2.isTouching(man)){
  man.destroy();
  corona2.destroy();
  explosion.play();
}
else{
  explosion.stop();
}
if(corona3.isTouching(child)){
  child.destroy();
  corona3.destroy();
  explosion.play();
}
else{
  explosion.stop();
}
 maze1 = createSprite(50,67,100,10);
maze1.shapeColor = "blue";
maze4 = createSprite(150,67,100,10);
maze4.shapeColor = "blue";
 maze5 = createSprite(240,120,10,100);
maze5.shapeColor = "blue";
 maze6 = createSprite(195,175,100,10);
maze6.shapeColor = "blue";
 maze7 = createSprite(245,67,100,10);
maze7.shapeColor = "blue";
maze8 = createSprite(350,115,100,10);
maze8.shapeColor = "blue";
 maze9 = createSprite(345,60,10,100);
maze9.shapeColor = "blue";
 maze10 = createSprite(145,220,10,100);
maze10.shapeColor = "blue";
 maze11 = createSprite(90,220,100,10);
maze11.shapeColor = "blue";
var maze12 = createSprite(40,175,10,100);
maze12.shapeColor = "blue";
var maze13 = createSprite(50,275,100,10);
maze13.shapeColor = "blue";
var maze14 = createSprite(100,320,10,100);
maze14.shapeColor = "blue";
var maze15 = createSprite(150,305,100,10);
maze15.shapeColor = "blue";
var maze16 = createSprite(290,175,100,10);
maze16.shapeColor = "blue";
var maze17 = createSprite(345,190,10,100);
maze17.shapeColor = "blue";
var maze18 = createSprite(345,255,100,10);
maze18.shapeColor = "blue";
var maze19 = createSprite(255,255,10,100);
maze19.shapeColor = "blue";
var maze20 = createSprite(230,350,100,10);
maze20.shapeColor = "blue";
var maze21 = createSprite(180,350,10,100);
maze21.shapeColor = "blue";
textSize(20);
fill("red");
textFont("phosphate");
text ("STAY HOME",400,300);
text ("STAY SAFE",400,320);
text ("STAY AWAY FROM CORONA",400,340);
  drawSprites();
}