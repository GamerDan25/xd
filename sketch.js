var starImg,bgImg;
var star, starBody;
var hadaMadrina, hadaMadrinaImg,hadaMadrinaSound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	hadaMadrinaImg = loadAnimation("images/fairy.png","images/fairyImage1.png","images/fairyImage2.png",);
	
	hadaMadrinaSound = loadSound("sound/joyMusic.mp3");
    

function setup() {
	createCanvas(800, 750);

	

	hadaMadrina = createSprite(400,375);
	hadaMadrina.addImage(hadaMadrinaImg);
	hadaMadrina.scale = 0.5;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyPressed(LEFT_ARROW)){
		hadaMadrina.velocityX = -0.5
	}
	if(keyPressed(RIGHT_ARROW)){
		hadaMadrina.velocityX = 0.5
	}
	 
	
}
