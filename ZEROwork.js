var ovni = 50;
var crew=50;
var ships=50;
var minerals=50;
var val;
var currentCard=0;
var indicedeck=0;
var dirc=0;
let imagenCarta;
var gameState=0;
var deck=[
  new Card("imgs/001.jpg","hola soy oprah","No lo creo","si sip",25,0,0,-25,-25,0,0,25),
  new Card("imgs/002.jpg","hola soy retrasada","Mentira","Porisita",1,1,1,1,-1,-1,-1,-1),
  new Card("imgs/003.jpg","hola tengo canser","No lo creo",":(",7,1,2,3,-1,-1,-1,-1),
  new Card("imgs/004.jpg","i did not had sex with that woman","mmmm","ok",1,1,1,1,-1,-1,-1,-1),
  new Card("imgs/005.jpg","hola soy oprah","No lo creo","si sip",7,1,2,3,-1,-1,-1,-1),
  new Card("imgs/006.jpg","yo soy de la cruz del sur","No lo creo","ok?",1,1,1,1,-1,-1,-1,-1),
  new Card("imgs/007.jpg","dsdsdsdsds","ok","ok",7,1,2,3,-1,-1,-1,-1),
  new Card("imgs/008.jpg","no soi jipster","dsdsfdsf","dsdsdsds",1,1,1,1,-1,-1,-1,-1),
  new Card("imgs/009.jpg","soi jipster","sdscsdcxz","ewewewe",7,1,2,3,-1,-1,-1,-1),
  new Card("imgs/010.jpg","uwu","uwu","uwu",1,1,1,1,-1,-1,-1,-1),
]

function preload() {
  // preload() runs once
  ovniIcon=loadImage("imgs/ovniIcon.png");
  crewIcon=loadImage("imgs/crewIcon.png");
  shipsIcon=loadImage("imgs/shipsIcon.png");
  mineralsIcon=loadImage("imgs/mineralsIcon.png");
  deckImages=[
    loadImage(deck[0].imgn),
    loadImage(deck[1].imgn),
    loadImage(deck[2].imgn),
    loadImage(deck[3].imgn),
    loadImage(deck[4].imgn),
    loadImage(deck[5].imgn),
    loadImage(deck[6].imgn),
    loadImage(deck[7].imgn),
    loadImage(deck[8].imgn),
    loadImage(deck[9].imgn)
  ];
  NovaMono=loadFont('assets/NovaMono-Regular.ttf');
}
function setup(){
  createCanvas(windowWidth, windowHeight);

  //botonIZ = createButton('JUGAR');
  //botonDER = createButton('SI');
  imageMode(CENTER);
botonPantC = createImg('assets/max.png');
botonPantC.size(0,0);
botonPantC.hide();
botonJugar= createImg('assets/btnjugar.png');

botonJugar.hide();
gameState=3;
}

function draw(){
    console.log("draw");
  cardX=windowWidth/2;
  cardY=windowHeight/2;

  windowResized();
  noLoop();
}

function nextCard(){
  if (ovni<=0 ||crew<=0||ships<=0||minerals<=0){
    // botonIZ.remove();
    // botonDER.remove();
    gameState=1;
    loadGO();
  }else if (gameState===0){
    cardX=windowWidth/2;
    cardY=windowHeight/2;
    loadUI();
  }
}

function accion_IZ(){
  ovni=ovni+deck[indicedeck].valorOVNI_IZ;
  crew=crew+deck[indicedeck].valorCREW_IZ;
  ships=ships+deck[indicedeck].valorSHIPS_IZ;
  minerals=minerals+deck[indicedeck].valorMINERALS_IZ;
  indicedeck++;
  //debugger;

  nextCard();
}

function accion_DER(){
  ovni=ovni+deck[indicedeck].valorOVNI_DER;
  crew=crew+deck[indicedeck].valorCREW_DER;
  ships=ships+deck[indicedeck].valorSHIPS_DER;
  minerals=minerals+deck[indicedeck].valorMINERALS_DER;

  indicedeck++;
  nextCard();
}

function windowResized() {
  if(gameState===0){
    resizeCanvas(windowWidth, windowHeight);
    loadUI();
  }else if(gameState===1){
    resizeCanvas(windowWidth, windowHeight);
    loadGO();
  }else if(gameState===3){
    resizeCanvas(windowWidth, windowHeight);
    loadStart();
  }
}

function loadStart(){
  console.log("im here start");
  gameState=3;
  background("#FFFFFF");
  botonJugar.mousePressed(loadUI);
  botonJugar.show();
  botonJugar.position(cardX,windowHeight-windowHeight/4);
  botonJugar.center('horizontal');
  // textSize(50);
  // fill("#DD4F42");
  // //stroke("#ABB2A0");
  // textFont(NovaMono);
  // textAlign(CENTER,TOP);
  // text("MACRISIS", windowWidth/2,windowHeight/3);
  // botonIZ.position(windowWidth/2-100,windowHeight-windowHeight/7);
  // botonIZ.mousePressed(loadUI);
  // botonIZ.size(150);
  // botonIZ.style('background-color', "#405D94");
  // botonIZ.style('border-radius', "8px");
  // botonIZ.style('display', "inline-block");
  // botonIZ.style('margin', "25px 25px 25px 25px");
  // botonIZ.style('border', "none");
  // botonIZ.style('font-family',  "NovaMono");
  // botonIZ.style('font-size', "32px");
}

function loadUI(){
  console.log("im here ui");
  gameState=0;
  var textoIZ;
  var textoDER;

  if (indicedeck>deck.length-1){
    indicedeck=0;
  }
botonPantC.size(windowWidth/12,windowHeight/12);
  botonPantC.show();
  botonJugar.size(0,0);
  botonJugar.hide();
  background("#282C34");
  textSize(16);
  textAlign(CENTER,TOP);
  rectMode(CENTER);
  fill("#21252B");
  rect(windowWidth/2,windowHeight/2,windowHeight/3,windowHeight/3);

  imageMode(CENTER);
  image(deckImages[indicedeck], cardX,cardY,windowHeight/2.5,windowHeight/2.5);
  //loadImage(deck[indicedeck].imgn, imagenCarta => {
  // image(imagenCarta, windowWidth/2,windowHeight/2,windowHeight/3,windowHeight/3);
  //});
  //image(deck[indicedeck].imgn, windowWidth/2,windowHeight/2,windowHeight/3,windowHeight/3);
  //text(textoIZ, windowWidth/2-100,windowHeight/2+160);
  //botonIZ.position(windowWidth/2-100-75,windowHeight/2+250);
  // botonDER.position(windowWidth/2+100-75,windowHeight-windowHeight/7);
  // botonDER.mousePressed(loadPC);
  // botonDER.size(150);
  // botonDER.style('background-color', "#4CAF50");
  // botonDER.style('border-radius', "8px");
  // botonDER.style('display', "inline-block");
  // botonDER.style('padding', "14px 40px");
  // botonDER.style('border', "none");
  // botonDER.style('font-family', "NovaMono");
  // botonDER.style('font-size', "32px");
  // botonDER.mouseOver(hoverDER).mouseOut(oHDER);

  botonPantC.position(windowWidth/2,windowHeight-windowHeight/7,500,500);
  botonPantC.mousePressed(loadPC);

  textSize(32);
  fill("#98C379");
  //stroke("#ABB2A0");
  textFont(NovaMono);

  if (ovni<25){
    ellipseMode(CENTER);
    fill("#7B2C34"); // Set fill to gray
    ellipse(windowWidth/2-150, windowHeight/2-300+13, 50, 50); // Draw gray ellipse using CENTER mode
  }
  fill("#98C379");
  text(ovni.toString(), (windowWidth/2)-150, windowHeight-windowHeight/1.2);
  text(crew.toString(), (windowWidth/2)-50, windowHeight-windowHeight/1.2);
  //text(crew.toString(), (windowWidth/2)-50, (windowHeight/2)-300);
  text(ships.toString(), (windowWidth/2)+50, windowHeight-windowHeight/1.2);
  text(minerals.toString(), (windowWidth/2)+150, windowHeight-windowHeight/1.2);

  textSize(25);
  fill("#E06C60");
  //text(deck[indicedeck].texto,(windowWidth/2), (windowHeight/2)-225);
  text(deck[indicedeck].texto,(windowWidth/2),windowHeight-windowHeight/1.3);
  // rectMode(CORNER);
  // rect(windowWidth/2-180, windowHeight/2-375,7,50);
  image(ovniIcon, windowWidth/2-150, windowHeight-windowHeight/1.12,50,50);
  image(crewIcon, windowWidth/2-50, windowHeight-windowHeight/1.12,50,50);
  image(shipsIcon, windowWidth/2+50, windowHeight-windowHeight/1.12,50,50);
  image(mineralsIcon, windowWidth/2+150, windowHeight-windowHeight/1.12,50,50);

}
function hoverIZ() {
  loadUI();
  textAlign(CENTER);
  fill("#BC78DD");
  textSize(20);
  textoIZ=text(deck[indicedeck].textoIZ, windowWidth/2-100,windowHeight/2+200);
  //text(deck[indicedeck].textoIZ, windowWidth/2-100,windowHeight/2+160);
}

function oHIZ() {
  loadUI();
  textAlign(CENTER);
  fill("#BC78DD");
  textSize(20);
  textoIZ=text(" ", windowWidth/2-100,windowHeight/2+200);
}
function hoverDER() {
  loadUI();
  textAlign(CENTER);
  fill("#BC78DD");
  textSize(20);
  textoDER=text(deck[indicedeck].textoDER, windowWidth/2+100,windowHeight/2+200);
}

function oHDER() {
  loadUI();
  textAlign(CENTER);
  fill("#BC78DD");
  textSize(20);
  textoIZ=text(" ", windowWidth/2+100,windowHeight/2+200);
}

function loadGO(){
    console.log("im here go");
  gameState=1;
  //botonJugar.remove();
  background("#282C34");
  textSize(40);
  textAlign(CENTER);
  text("GUEIM OBER uwu", windowWidth/2,windowHeight/2);
}
function mouseDragged() {
  if (gameState===0 && mouseY>windowHeight/2-windowHeight/4 && mouseY<windowHeight/2+windowHeight/4){
    cardX=mouseX;
    cardY=mouseY;

    if(mouseX>windowWidth/2){
      hoverDER();
      //loadUI();

    }else if (mouseX<windowWidth/2){
      hoverIZ();

      //loadUI();
    }
  }
}

function mouseReleased(){

  if(gameState===0 && mouseX>windowWidth/2+windowWidth/4){
    accion_DER()

  }else if(gameState===0 && mouseX<windowWidth/2-windowWidth/4){
    accion_IZ()

  }else if(gameState===0)  {
    cardX=windowWidth/2;
    cardY=windowHeight/2;
    loadUI();
  }

}
function loadPC() {

  let fs = fullscreen();
  fullscreen(!fs);
  console.log(gameState);
}
