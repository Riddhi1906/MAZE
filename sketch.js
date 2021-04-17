
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;
var box41,box42,box43,box44,box45,box46,box47,box48,box49,box50,box51,box52,box53,box54,box55,box56,box57,box58,box59,box60;
var box61,box62,box63,box64,box65,box66,box67,box68,box69,box70,box71,box72,box73,box74,box75;
var boy,goal,win,trophy,box;
var border1,border2,border3,border4;

function preload(){
    boy1Img = loadImage("1.png");
    boy2Img = loadImage("2.png");
    trophyImg = loadImage("t.png");
}
function setup(){
    var canvas = createCanvas(800,700);
    
    boy = createSprite(30,30,20,20);
    boy.addImage(boy1Img);
    boy.scale = 0.2;

    trophy = createSprite(398,615,20,20);
    trophy.addImage(trophyImg);
    trophy.scale = 0.2;

    border1 = createSprite(400,0,800,10);
    border2 = createSprite(800,350,10,800);
    border3 = createSprite(400,700,800,10);
    border4 = createSprite(0,350,10,800);
    
    box1 = createSprite(95,57,66,5);
    box2 = createSprite(33,110,66,5);
    box3 = createSprite(125,110,5,110);
    box4 = createSprite(33,270,66,5);
    box5 = createSprite(64,215,5,110);
    box6 = createSprite(127,216,123,5);
    box7 = createSprite(189,162.5,122,5);
    box8 = createSprite(187,135,5,56);
    box9 = createSprite(248,57,128,5);
    box10 = createSprite(248,84,5,55);
    box11 = createSprite(309,192,5,266);
    box12 = createSprite(247,215,5,105);
    box13 = createSprite(217,270,65,5);
    box14 = createSprite(125,295,5,55);
    box15 = createSprite(370,30,5,55);
    box16 = createSprite(400,57,65,5);
    box17 = createSprite(523,57,65,5);
    box18 = createSprite(95,323,66,5);
    box19 = createSprite(187,349,5,164.5);
    box20 = createSprite(248,323,128,5);
    box21 = createSprite(491,84,5,55);
    box22 = createSprite(370,163,5,113);
    box23 = createSprite(523,110,308,5);
    box24 = createSprite(613,85,5,160);
    box25 = createSprite(705,57,65,5);
    box26 = createSprite(735,137,5,163);
    box27 = createSprite(705,162,65,5);
    box28 = createSprite(765,217,65,5);
    box29 = createSprite(492,162,128,5);
    box30 = createSprite(491,272,5,215);
    box31 = createSprite(64,430,5,215);
    box32 = createSprite(154,376,61,5);
    box33 = createSprite(399,270,65,5);
    box34 = createSprite(399,322,65,5);
    box35 = createSprite(430,320,5,215);
    box36 = createSprite(218,430,308,5);
    box37 = createSprite(309,376,128,5);
    box38 = createSprite(370,430,5,111);
    box39 = createSprite(552,270,5,215);
    box40 = createSprite(615,216,122,5);
    box41 = createSprite(33,536,66,5);
    box42 = createSprite(248,458,5,55);
    box43 = createSprite(186,482.5,128,5);
    box44 = createSprite(399,482,66,5);
    box45 = createSprite(674,245,5,55);
    box46 = createSprite(705,270,65,5);
    box47 = createSprite(735,295,5,55);
    box48 = createSprite(765,322,65,5);
    box49 = createSprite(613,295,5,55);
    box50 = createSprite(643,322,65,5);
    box51 = createSprite(674,350,5,55);
    box52 = createSprite(705,376,65,5);
    box53 = createSprite(583,376,65,5);
    box54 = createSprite(613,402,5,55);
    box55 = createSprite(522,429,187,5);
    box56 = createSprite(491,458,5,55);
    box57 = createSprite(674,456,5,57);
    box58 = createSprite(613,482,126,5);
    box59 = createSprite(735,510,5,265);
    box60 = createSprite(492,536,126,5);
    box61 = createSprite(552,536,5,110);
    box62 = createSprite(613,511,5,58);
    box63 = createSprite(674,560,5,58);
    box64 = createSprite(583,590,187,5);
    box65 = createSprite(613,615,5,56);
    box66 = createSprite(674,643,126,5);
    box67 = createSprite(491,669,5,55);
    box68 = createSprite(552,669,5,55);
    box69 = createSprite(430,562,5,164.5);
    box70 = createSprite(399,590,65,5);
    box71 = createSprite(308,562,5,164.5);
    box72 = createSprite(248,536,250,5);
    box73 = createSprite(125,562,5,55);
    box74 = createSprite(155,590,187,5);
    box75 = createSprite(246,643,370,5);
 }

function draw(){
  background("white");
  
  textSize(15);
  text("Press 'R' to reset",670,30);
     if(keyDown(LEFT_ARROW)){
       boy.addImage(boy2Img);
       boy.x = boy.x - 2;
     }
 
     if(keyDown(RIGHT_ARROW)){
       boy.addImage(boy1Img);
       boy.x = boy.x + 2;
     }
 
     if(keyDown(UP_ARROW)){
       boy.y = boy.y - 2;
     }
  
     if(keyDown(DOWN_ARROW)){
       boy.y = boy.y + 2;
     }

  drawSprites();

  boy.collide(border1);
  boy.collide(border2);
  boy.collide(border3);
  boy.collide(border4);

  boy.collide(box1);
  boy.collide(box2);
  boy.collide(box3);
  boy.collide(box4);
  boy.collide(box5);
  boy.collide(box6);
  boy.collide(box7);
  boy.collide(box8);
  boy.collide(box9);
  boy.collide(box10);
  boy.collide(box11);
  boy.collide(box12);
  boy.collide(box13);
  boy.collide(box14);
  boy.collide(box15);
  boy.collide(box16);
  boy.collide(box17);
  boy.collide(box18);
  boy.collide(box19);
  boy.collide(box20);
  boy.collide(box21);
  boy.collide(box22);
  boy.collide(box23);
  boy.collide(box24);
  boy.collide(box25);
  boy.collide(box26);
  boy.collide(box27);
  boy.collide(box28);
  boy.collide(box29);
  boy.collide(box30);
  boy.collide(box31);
  boy.collide(box32);
  boy.collide(box33);
  boy.collide(box34);
  boy.collide(box35);
  boy.collide(box36);
  boy.collide(box37);
  boy.collide(box38);
  boy.collide(box39);
  boy.collide(box40);
  boy.collide(box41);
  boy.collide(box42);
  boy.collide(box43);
  boy.collide(box44);
  boy.collide(box45);
  boy.collide(box46);
  boy.collide(box47);
  boy.collide(box48);
  boy.collide(box49);
  boy.collide(box50);
  boy.collide(box51);
  boy.collide(box52);
  boy.collide(box53);
  boy.collide(box54);
  boy.collide(box55);
  boy.collide(box56);
  boy.collide(box57);
  boy.collide(box58);
  boy.collide(box59);
  boy.collide(box60);
  boy.collide(box61);
  boy.collide(box62);
  boy.collide(box63);
  boy.collide(box64);
  boy.collide(box65);
  boy.collide(box66);
  boy.collide(box67);
  boy.collide(box68);
  boy.collide(box69);
  boy.collide(box70);
  boy.collide(box71);
  boy.collide(box72);
  boy.collide(box73);
  boy.collide(box74);
  boy.collide(box75);

  if(boy.isTouching(trophy)){
    background("grey");
    trophy.visible = false;
    boy.visible = false;
    textSize(50);
    fill("white");
    text("YOU WIN",298,380);
    text("Press 'R' to restart",218,430);
 }
  
 if(keyDown("R")){
   boy.visible = true;
   boy.x = 30;
   boy.y = 30;
   trophy.visible = true;

 }

}
 