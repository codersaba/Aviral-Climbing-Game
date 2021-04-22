var area,areaImg,mainStand,mainStandImg,man,manLeftImg,manRightImg,manBlock,standBlock,standImg,manBlock,standGroup,standBlockGroup;

function preload(){

  areaImg=loadImage("4062fdb3-c2d1-4df0-a184-87db00473f9f.jpg");
  mainStandImg=loadImage("743e9351-41ff-4251-8fd4-edcaa16108fd.jpg");
  manLeftImg=loadImage("09b51cc3-b58f-4a12-bea2-2a221e5c379d-removebg-preview.png");
  manRightImg=loadImage("cbd7371e-bc31-47ff-9b0c-7f06ec0bffd3-removebg-preview (2).png");
  StandImg=loadImage("743e9351-41ff-4251-8fd4-edcaa16108fd.jpg");

}


function setup() {

  createCanvas(470,700);

  area= createSprite (235,350,400,600);
  mainStand= createSprite (235, 650, 100, 20);
  man= createSprite (235, 600, 50, 100);
  manBlock=createSprite (235, 650, 10, 5);

  area.addImage(areaImg);
  mainStand.addImage(mainStandImg);
  man.addImage(manLeftImg);

  area.scale=3;
  mainStand.scale=0.3;
  man.scale=0.25;

  area.velocityY=3;
  man.x=manBlock.x;
  manBlock.y=man.y+50;


 // manBlock.visible=false;

  standGroup=createGroup();
  standBlockGroup=createGroup();
man.debug=true
}


function draw() {
  background(0);  
                                                                       

  if(area.y>500){
    area.y = area.height/2;
  }


  
  if(keyDown("space")){
    man.velocityY=-3;  
    mainStand.destroy()          
  }
  man.velocityY=man.velocityY+0.05;
  /*if(man.collide(mainStand)||manBlock.collide(standBlockGroup)){
    man.velocityY=0;
    manBlock.velocityY=0;
  }*/

  man.collide(mainStand)
  man.collide(standBlockGroup)
                     

  manBlock.velocityY=manBlock.velocityY+0.05;

  if(keyWentDown(RIGHT_ARROW)){
  man.addImage(manRightImg);
  man.scale=0.35;
  man.velocityX=3

  }
  if(keyWentUp(RIGHT_ARROW)){
    
    man.velocityX=0
  
    }

  if(keyWentDown(LEFT_ARROW)){
    man.addImage(manLeftImg);
    man.scale=0.25;
    man.velocityX=-3
  }
  if(keyWentUp(LEFT_ARROW)){
    
    man.velocityX=0
  
    }

  if(World.frameCount%70===0){
    stands();
  }

  drawSprites();
}


function stands(){
let stand=createSprite(random(70,400), -10, 70, 10);
standBlock=createSprite(stand.x, stand.y-5, 70, 2);

stand.addImage(StandImg);
stand.scale=0.25;

stand.velocityY=area.velocityY;
standBlock.velocityY=stand.velocityY;

stand.lifetime=710*stand.velocity;

//standBlock.visible=false;

//standGroup.add(stand);
standBlockGroup.add(standBlock);


}