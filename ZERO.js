var ovni = 50;
var crew=50;
var ships=50;
var minerals=50;
var val;
var currentCard=0;
var indicedeck=0;
var dirc=0;
let imagenCarta;

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
  ]
  //img = loadImage('assets/laDefense.jpg');
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  botonIZ = createButton('NO');
  botonDER = createButton('SI');
  //loadUI();
}

function draw(){
  cardX=windowWidth/2;
  cardY=windowHeight/2;
presionado=0;
  loadUI();
  noLoop();

}

function nextCard(){
  if (ovni<=0 ||crew<=0||ships<=0||minerals<=0){
    botonIZ.remove();
    botonDER.remove();
    loadGO();
  }else{
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
  ++indicedeck;
  //debugger;

  nextCard();
}

function accion_DER(){
  ovni=ovni+deck[indicedeck].valorOVNI_DER;
  crew=crew+deck[indicedeck].valorCREW_DER;
  ships=ships+deck[indicedeck].valorSHIPS_DER;
  minerals=minerals+deck[indicedeck].valorMINERALS_DER;

  ++indicedeck;
  //debugger;

  nextCard();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function loadUI(){
presionado=0;
  var textoIZ;
  var textoDER;

  if (indicedeck>9){
    indicedeck=0;
  }

  background("#282C34");
  textSize(16);
  textAlign(CENTER,TOP);
  rectMode(CENTER);
  fill("#21252B");
  rect(windowWidth/2,windowHeight/2,windowHeight/3,windowHeight/3);

  imageMode(CENTER);
  //loadImage(deck[indicedeck].imgn, imagenCarta => {
  // image(imagenCarta, windowWidth/2,windowHeight/2,windowHeight/3,windowHeight/3);
  //});



  image(deckImages[indicedeck], cardX,cardY,windowHeight/2.5,windowHeight/2.5);

  //image(deck[indicedeck].imgn, windowWidth/2,windowHeight/2,windowHeight/3,windowHeight/3);

  //text(textoIZ, windowWidth/2-100,windowHeight/2+160);
  //botonIZ.position(windowWidth/2-100-75,windowHeight/2+250);
  botonIZ.position(windowWidth/2-100-75,windowHeight-windowHeight/7);
  botonIZ.mousePressed(accion_IZ);
  botonIZ.size(150);
  botonIZ.style('background-color', "#f44336");
  botonIZ.style('border-radius', "8px");
  botonIZ.style('display', "inline-block");
  botonIZ.style('padding', "14px 40px");
  botonIZ.style('border', "none");
  botonIZ.style('font-family', "saxMono");
  botonIZ.style('font-size', "32px");
  botonIZ.mouseOver(hoverIZ).mouseOut(oHIZ);


  botonDER.position(windowWidth/2+100-75,windowHeight-windowHeight/7);
  botonDER.mousePressed(loadPC);
  botonDER.size(150);
  botonDER.style('background-color', "#4CAF50");
  botonDER.style('border-radius', "8px");
  botonDER.style('display', "inline-block");
  botonDER.style('padding', "14px 40px");
  botonDER.style('border', "none");
  botonDER.style('font-family', "saxMono");
  botonDER.style('font-size', "32px");
  botonDER.mouseOver(hoverDER).mouseOut(oHDER);


  textSize(32);
  fill("#98C379");
  //stroke("#ABB2A0");
  textFont('saxMono');

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

  rectMode(CORNER);
  rect(windowWidth/2-180, windowHeight/2-375,7,50);





  image(ovniIcon, windowWidth/2-150, windowHeight-windowHeight/1.12,50,50);

  //image(crewIcon, windowWidth/2-50, windowHeight/2-350,50,50);
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
  background("#282C34");
  textSize(40);
  textAlign(CENTER);
  text("GUEIM OBER uwu", windowWidth/2,windowHeight/2);
}
function mouseDragged() {
  cardX=mouseX;
  cardY=mouseY;
  presionado=1;
  if(mouseX>windowWidth/2){
    hoverDER();
    //loadUI();

  }else if (mouseX<windowWidth/2){
    hoverIZ();

    //loadUI();
  }

}
function mouseReleased(){
  if(presionado=1 && mouseX>windowWidth/2+windowWidth/4){
    accion_DER()

  }else if(presionado=1 && mouseX<windowWidth/2-windowWidth/4){
    accion_IZ()

  }else {
    cardX=windowWidth/2;
    cardY=windowHeight/2;
    loadUI();
  }

}
function loadPC() {
  let fs = fullscreen();
  fullscreen(!fs);
}
