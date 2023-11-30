var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music,music1,music2,music3;

function preload(){
    music = loadSound("Dove_Cameron_-_We_Go_Down_Together_ft_Khalid_FlexyOkay.com.mp3")
    music1 = loadSound("Drake_-_One_Dance_feat_Wizkid_Kyla__FlexyOkay.com.mp3")
    music2 = loadSound("lenka - Everything At Once.mp3")
    music3 = loadSound("Rotimi_-_In_My_Bed_ft_Wale_Legit9ja_com.mp3")
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

   block4 = createSprite(725,580,200,30);
  block4.shapeColor = "green";


    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

    ball.velocityY = 3;
    ball.velocityX = -3;


}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    stroke("yellow");
    fill("red");
    textSize(30);
    text("MUSIC PROJECT xD",230,250);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        music1.stop()
        music2.stop();
        
    }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
        music.stop()
        music1.play();
        music2.stop();
        music3.stop();

    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
ball.shapeColor = "red";
music.stop();
music1.stop()
music2.play();
music3.stop();
    }


    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
ball.shapeColor = "green";
music.stop();
music1.stop();
music2.stop();
music3.play();

    }



    drawSprites();
}
