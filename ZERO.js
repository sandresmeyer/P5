var ovni = 50;
var crew=50;
var ships=50;
var minerals=50;
var val;
var i=0;
var indicedeck=0;
var dirc=0;
let imagenCarta;
var gameState=0;
var cardToDisplay;
var personajes=[
  new Personaje("oprah","imgs/001.jpg"),
  new Personaje("retrasada","imgs/002.jpg"),
  new Personaje("anseano","imgs/003.jpg"),
  new Personaje("clinton","imgs/004.jpg"),
  new Personaje("not oprah","imgs/005.jpg"),
  new Personaje("charly","imgs/006.jpg"),
  new Personaje("nn","imgs/007.jpg"),
  new Personaje("jipster","imgs/008.jpg"),
  new Personaje("not jipster","imgs/009.jpg"),
  new Personaje("uwu","imgs/010.jpg")
]
var deckEspecial=[
  new Card(personajes[4].nombre,"muchas gracias","No lo creo","si sip",25,0,0,-25,-25,0,0,25),
  new Card(personajes[4].nombre,"me parece una falta de respeto","Mentira","Porisita",1,1,1,1,-1,-1,-1,-1),

]
var deck=[
  new Card(personajes[0].nombre,"hola soy oprah","No lo creo","si sip",25,0,0,-25,-25,0,0,25),
  new Card(personajes[1].nombre,"hola soy retrasada","Mentira","Porisita",1,1,1,1,-1,-1,-1,-1),
  new Card(personajes[2].nombre,"hola tengo canser","No lo creo",":(",7,1,2,3,-1,-1,-1,-1),
  new Card(personajes[3].nombre,"i did not had sex with that woman","mmmm","ok",1,1,1,1,-1,-1,-1,-1),
  new Card(personajes[4].nombre,"hola soy oprah","No lo creo","si sip",7,1,2,3,-1,-1,-1,-1,deckEspecial[0],deckEspecial[1]),
  new Card(personajes[5].nombre,"yo soy de la cruz del sur","No lo creo","ok?",1,1,1,1,-1,-1,-1,-1),
  new Card(personajes[6].nombre,"dsdsdsdsds","ok","ok",7,1,2,3,-1,-1,-1,-1),
  new Card(personajes[7].nombre,"no soi jipster","dsdsfdsf","dsdsdsds",1,1,1,1,-1,-1,-1,-1),
  new Card(personajes[8].nombre,"soi jipster","sdscsdcxz","ewewewe",7,1,2,3,-1,-1,-1,-1),
  new Card(personajes[9].nombre,"uwu","uwu","uwu",1,1,1,1,-1,-1,-1,-1),
]


function preload() {
  // preload() runs once
  ovniIcon=loadImage("imgs/ovniIcon.png");
  crewIcon=loadImage("imgs/crewIcon.png");
  shipsIcon=loadImage("imgs/shipsIcon.png");
  mineralsIcon=loadImage("imgs/mineralsIcon.png");
  deckImages=[
    loadImage(personajes[0].imagen),
    loadImage(personajes[1].imagen),
    loadImage(personajes[2].imagen),
    loadImage(personajes[3].imagen),
    loadImage(personajes[4].imagen),
    loadImage(personajes[5].imagen),
    loadImage(personajes[6].imagen),
    loadImage(personajes[7].imagen),
    loadImage(personajes[8].imagen),
    loadImage(personajes[9].imagen)
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
  noLoop();
    //console.log("draw");
  cardX=windowWidth/2;
  cardY=windowHeight/2;

  windowResized();

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

// function cardHandler(cardToDisplay){
//
//   return cardToDisplay;
// }



function loadStart(){
  //console.log("im here start");

  gameState=3;
  background("#FFFFFF");
  botonJugar.mousePressed(loadUI);
  botonJugar.show();
  botonJugar.position(cardX,windowHeight-windowHeight/4);
  botonJugar.center('horizontal');
  cardToDisplay=deck[indicedeck];
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

  //console.log("im here ui");
  gameState=0;
  var textoIZ;
  var textoDER;

  if (indicedeck>deck.length-1){
    indicedeck=0;
    cardToDisplay=deck[indicedeck];
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
  console.log(indicedeck);
text(cardToDisplay.personaje, (windowWidth/2), windowHeight-windowHeight/4);

  textSize(32);
  fill("#98C379");
  //stroke("#ABB2A0");
  textFont(NovaMono);

    fillColorHandler(ovni);
  text(ovni.toString(), (windowWidth/2)-150, windowHeight-windowHeight/1.2);
  fillColorHandler(crew);
  text(crew.toString(), (windowWidth/2)-50, windowHeight-windowHeight/1.2);
  //text(crew.toString(), (windowWidth/2)-50, (windowHeight/2)-300);
  fillColorHandler(ships);
  text(ships.toString(), (windowWidth/2)+50, windowHeight-windowHeight/1.2);
  fillColorHandler(minerals);
  text(minerals.toString(), (windowWidth/2)+150, windowHeight-windowHeight/1.2);

  textSize(25);
  fill("#E06C60");
  //text(deck[indicedeck].texto,(windowWidth/2), (windowHeight/2)-225);
  text(cardToDisplay.texto,(windowWidth/2),windowHeight-windowHeight/1.3);
  // rectMode(CORNER);
  // rect(windowWidth/2-180, windowHeight/2-375,7,50);
  image(ovniIcon, windowWidth/4-100, windowHeight/25,windowHeight/15,windowHeight/15);
  image(crewIcon, windowWidth/2-75, windowHeight/25,windowHeight/15,windowHeight/15);
  image(shipsIcon, windowWidth/2+75, windowHeight/25,windowHeight/15,windowHeight/15);
  image(mineralsIcon, windowWidth/4+100, windowHeight/25,windowHeight/15,windowHeight/15);

}

function accion_IZ(){
  if (cardToDisplay.optIZ != null){
      cardToDisplay=deck[indicedeck].optIZ;
nextCard();
  }else{
    ovni=ovni+deck[indicedeck].valorOVNI_IZ;
    crew=crew+deck[indicedeck].valorCREW_IZ;
    ships=ships+deck[indicedeck].valorSHIPS_IZ;
    minerals=minerals+deck[indicedeck].valorMINERALS_IZ;
    indicedeck++;
    //debugger;
cardToDisplay=deck[indicedeck];
    nextCard();

  }

}

function accion_DER(){
  if (cardToDisplay.optDer != null){
      cardToDisplay=deck[indicedeck].optDer;
nextCard();
  }else{
    ovni=ovni+deck[indicedeck].valorOVNI_DER;
    crew=crew+deck[indicedeck].valorCREW_DER;
    ships=ships+deck[indicedeck].valorSHIPS_DER;
    minerals=minerals+deck[indicedeck].valorMINERALS_DER;

    indicedeck++;
    cardToDisplay=deck[indicedeck];
    nextCard();

  }

}



function hoverIZ() {
  loadUI();
  textAlign(CENTER);
  fill("#BC78DD");
  textSize(20);
  textoIZ=text(cardToDisplay.textoIZ, windowWidth/2-100,windowHeight/2+200);
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
  textoDER=text(cardToDisplay.textoDER, windowWidth/2+100,windowHeight/2+200);
}

function oHDER() {
  loadUI();
  textAlign(CENTER);
  fill("#BC78DD");
  textSize(20);
  textoIZ=text(" ", windowWidth/2+100,windowHeight/2+200);
}

function loadGO(){
    //console.log("im here go");
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
  //console.log(gameState);
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
function fillColorHandler(variable){
  if (variable<=10){
    fill("#E32221");
  }else if(variable<=20){
    fill("#E7521F");
  }else if(variable<=30){
    fill("#EB831D");
  }else if(variable<=40){
    fill("#EFB31B");
  }else if(variable<=50){
    fill("#F3E419");
  }else if(variable<=60){
    fill("#F3E419");
  }else if(variable<=70){
    fill("#B6CE29");
  }else if(variable<=80){
    fill("#79B93A");
  }else if(variable<=90){
    fill("#3CA34A");
  }else if(variable<=100){
    fill("#008E5B");
  }

}
