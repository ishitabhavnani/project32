const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2, ground;
var ball;
var chain;
var score=0,bg;
var gameState="onSling";
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
function preload() {
   getBgImg(); 
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    
    ball=new Ball(100,200,50)

    chain= new SlingShot(ball.body,{x:100,y:200})
    platform1 = new Ground(580, 350, 200, 20);
     ground=new Ground(500,470,1000,30)
    
    box1= new Box(520,320,30,40)
    box2= new Box(550,320,30,40)
    box3= new Box(580,320,30,40)
    box4= new Box(610,320,30,40)
    box5= new Box(640,320,30,40)
 

   
    box6= new Box(535,280,30,40)
    box7= new Box(565,280,30,40)
    box8= new Box(595,280,30,40)
    box9= new Box(625,280,30,40)
    

 
    box10= new Box(550,240,30,40)
    box11= new Box(580,240,30,40)
    box12= new Box(610,240,30,40)

    box13 = new Box(565,200,30,40)
    box14 = new Box(595,200,30,40)

    box15 = new Box(580,160,30,40)


    platform2= new Ground(895,250,150,20)

    box16= new Box(850,220,30,40)
    box17= new Box(880,220,30,40)
    box18= new Box(910,220,30,40)
    box19= new Box(940,220,30,40)

    box20= new Box(865,180,30,40)
    box21= new Box(895,180,30,40)
    box22= new Box(925,180,30,40)

    box23= new Box(880,140,30,40)
    box24= new Box(915,140,30,40)

    box25= new Box(895,100,30,40)


}

function draw(){
    if (bg===0){
        background("aquamarine");
    }
    else{
        background("slateBlue");
    }
    Engine.update(engine);
    strokeWeight(3)
    text("SCORE: " +score,750,40)
    text("Press space to get a second chance to play", 50,100)
    ground.display();
    ball.display();
    chain.display();
    platform1.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   

    
    box6.display();
    box7.display();
    box8.display();
    box9.display();
   
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();

    box15.display();

    platform2.display();
  
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();
    box22.display();

    box23.display();
    box24.display();

    box25.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    //getBgImg();
}

function mouseDragged(){
    if (gameState==="onSling"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    chain.fly();
    gameState="launched"
}

function keyPressed(){
    
    if (keyCode===32){

     chain.attach(ball.body)
     gameState="onSling";
    }
    
}

async function getBgImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON= await response.json();
    var datetime= responseJSON.datetime;
    var hour = datetime.slice(11,13);
  
    if (hour<=18 && hour>=06){
        bg=0;

    }


}
