var med = 50;
var pob= 50;
var seg= 50;
var econ= 50;
var indicedeck=0;
let imagenCarta;
var gameState=0;
var cardToDisplay;
var personajes=[
  new Personaje("CRISTINA","imgs/00.jpg"),
  new Personaje("LA CHIQUI","imgs/01.jpg"),
  new Personaje("LANATA","imgs/02.jpg"),
  new Personaje("LA VIDAL","imgs/03.jpg"),
  new Personaje("ELISA","imgs/04.jpg"),
  new Personaje("JULIANA AWADA","imgs/05.jpg"),
  new Personaje("SR BISMAN","imgs/06.jpg"),
  new Personaje("FEINMANN","imgs/07.jpg"),
  new Personaje('"GAI"',"imgs/08.jpg"),
  new Personaje("CHRISTINE","imgs/09.jpg"),
  new Personaje("BOMBONADIO","imgs/10.jpg"),
  new Personaje("PICHETTO","imgs/11.jpg"),
  new Personaje('MARGARITA YOYAGANÉ',"imgs/12.jpg"),
  new Personaje("DE BRITO","imgs/13.jpg"),
  new Personaje("PEÑA","imgs/14.jpg"),
  new Personaje("MALDITA LISIADA","imgs/15.jpg"),
  new Personaje("PAPI","imgs/16.jpg"),
  new Personaje("PATO PATO PATO PATO","imgs/17.jpg"),
  new Personaje("DA LO MISMO","imgs/18.jpg"),
  new Personaje("AMALIA","imgs/19.jpg"),
  new Personaje("TINCHO","imgs/20.jpg"),
  new Personaje("DURAN DURAN","imgs/21.jpg"),
  new Personaje("MILI","imgs/22.jpg"),
  new Personaje("LA SUSI","imgs/23.jpg"),
  new Personaje("CHETA DE NORDELTA","imgs/24.jpg"),
  new Personaje("OK BOOMER","imgs/25.jpg"),
  new Personaje("JUAN PEREZ","imgs/26.jpg"),
  new Personaje("OTRA CHETA","imgs/27.jpg"),

  //new Personaje("Bombonadio","imgs/30.jpg"),
]
var deckEspecial=[
  new Card(personajes[4].nombre,"Si, yo otra vez","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[4].nombre,"Si, yo otra vez","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[14].nombre,"Si, yo otra vez","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[14].nombre,"Si, yo otra vez","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[24].nombre,"Si, yo otra vez","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[24].nombre,"Si, yo otra vez","...","...",0,0,0,0,0,0,0,0),
]
var deck=[
  new Card(personajes[0].nombre,"Armen un partido y ganen las elecciones.","KUKA KAKA","Ganamos!!, lastima feo dia",-49,-25,25,50,50,25,-25,-49),
  new Card(personajes[1].nombre,"Daría mi vida para que no volviera el kirchnerismo.","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[2].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[3].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[4].nombre,"...","...","...",0,0,0,0,0,0,0,0,deckEspecial[0],deckEspecial[1]),
  new Card(personajes[5].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[6].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[7].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[8].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[9].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[10].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[11].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[12].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[13].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[14].nombre,"...","...","...",0,0,0,0,0,0,0,0,deckEspecial[0],deckEspecial[1]),
  new Card(personajes[15].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[16].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[17].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[18].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[19].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[20].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[21].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[22].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[23].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[24].nombre,"...","...","...",0,0,0,0,0,0,0,0,deckEspecial[0],deckEspecial[1]),
  new Card(personajes[25].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[26].nombre,"...","...","...",0,0,0,0,0,0,0,0),
  new Card(personajes[27].nombre,"...","...","...",0,0,0,0,0,0,0,0),


]


function preload() {
  // preload() runs once
  medIcon=loadImage("imgs/medIcon.png");
  pobIcon=loadImage("imgs/pobIcon.png");
  segIcon=loadImage("imgs/segIcon.png");
  econIcon=loadImage("imgs/econIcon.png");
  fLEFT=loadImage("assets/fLEFT.png");
  fRIGHT=loadImage("assets/fRIGHT.png");
  logo=loadImage("assets/logo.png");
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
    loadImage(personajes[9].imagen),
    loadImage(personajes[10].imagen),
    loadImage(personajes[11].imagen),
    loadImage(personajes[12].imagen),
    loadImage(personajes[13].imagen),
    loadImage(personajes[14].imagen),
    loadImage(personajes[15].imagen),
    loadImage(personajes[16].imagen),
    loadImage(personajes[17].imagen),
    loadImage(personajes[18].imagen),
    loadImage(personajes[19].imagen),
    loadImage(personajes[20].imagen),
    loadImage(personajes[21].imagen),
    loadImage(personajes[22].imagen),
    loadImage(personajes[23].imagen),
    loadImage(personajes[24].imagen),
    loadImage(personajes[25].imagen),
    loadImage(personajes[26].imagen),
    loadImage(personajes[27].imagen)


  ];
  SFMono=loadFont('assets/SFMono-Regular.otf');
  GothamB=loadFont('assets/Gotham-Bold.ttf');
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
  botonInfo= createImg('assets/btnInfo.png');
  botonInfo.hide();
  botonCerrar= createImg('assets/btnCerrar.png');
  botonCerrar.hide();
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
  if (med<=0 ||pob<=0||seg<=0||econ<=0){
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
  image(logo, windowWidth/2, windowHeight/2.5,300,300);
  botonJugar.mousePressed(loadUI);
  botonJugar.show();
  // botonJugar.size(windowHeight/4,(windowHeight/4)/4);
  botonJugar.size(100,100);
  botonJugar.position(windowWidth/2-botonJugar.width/2,windowHeight-windowHeight/3);

rectMode(CORNER);
noStroke();
fill("#F4F3B3");
rect(0,0,windowWidth/9,windowHeight/60);
fill("#FBD200");
rect(windowWidth/9,0,windowWidth/9,windowHeight/60);
fill("#F7B518");
rect(windowWidth/9*2,0,windowWidth/9,windowHeight/60);
fill("#ED2C22");
rect(windowWidth/9*3,0,windowWidth/9,windowHeight/60);
fill("#E976B0");
rect(windowWidth/9*4,0,windowWidth/9,windowHeight/60);
fill("#EC529F");
rect(windowWidth/9*5,0,windowWidth/9,windowHeight/60);
fill("#174596");
rect(windowWidth/9*6,0,windowWidth/9,windowHeight/60);
fill("#056895");
rect(windowWidth/9*7,0,windowWidth/9,windowHeight/60);
fill("#82D0E6");
rect(windowWidth/9*8,0,windowWidth/9,windowHeight/60);

fill("#F4F3B3");
rect(0,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#FBD200");
rect(windowWidth/9,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#F7B518");
rect(windowWidth/9*2,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#ED2C22");
rect(windowWidth/9*3,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#E976B0");
rect(windowWidth/9*4,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#EC529F");
rect(windowWidth/9*5,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#174596");
rect(windowWidth/9*6,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#056895");
rect(windowWidth/9*7,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
fill("#82D0E6");
rect(windowWidth/9*8,windowHeight-windowHeight/60,windowWidth/9,windowHeight/60);
  cardToDisplay=deck[indicedeck];

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


  botonPantC.show();
  botonPantC.size(windowHeight/20,windowHeight/20);
  botonPantC.position(windowWidth/12-botonPantC.width/2,windowHeight-windowHeight/12);
  botonPantC.mousePressed(loadPC);

  botonInfo.show();
  botonInfo.size(windowHeight/20,windowHeight/20);
  botonInfo.position((windowWidth-windowWidth/12)-botonPantC.width/2,windowHeight-windowHeight/12);
  botonInfo.mousePressed(loadInfo);

  botonJugar.size(0,0);
  botonJugar.hide();
  botonCerrar.size(0,0);
  botonCerrar.hide();
  background("#FFFFFF");
  textSize(16);
  textAlign(CENTER,TOP);
  rectMode(CENTER);
  fill("#21252B");
  rect(windowWidth/2,windowHeight/2,windowHeight/3,windowHeight/3);





  textSize(27);
  fill("#000000");
  //stroke("#ABB2A0");
  textFont(GothamB);
  console.log(indicedeck);
  text(cardToDisplay.personaje, windowWidth/2,windowHeight-windowHeight/5,windowWidth-20, windowHeight/6);

  textSize(25);

  //stroke("#ABB2A0");
  textFont(GothamB);

  fillColorHandler(med);
  text(med.toString(), windowWidth/2-150, windowHeight/25+35);
  fillColorHandler(pob);
  text(pob.toString(), windowWidth/2-50, windowHeight/25+35);
  //text(pob.toString(), (windowWidth/2)-50, (windowHeight/2)-300);
  fillColorHandler(seg);
  text(seg.toString(), windowWidth/2+50, windowHeight/25+35);
  fillColorHandler(econ);
  text(econ.toString(), windowWidth/2+150, windowHeight/25+35);

  textSize(20);
  fill("#000000");
  rectMode(CENTER);
  textAlign(CENTER);
  //text(deck[indicedeck].texto,(windowWidth/2), (windowHeight/2)-225);
  textFont(SFMono);
  text(cardToDisplay.texto,windowWidth/2,windowHeight/3.8,windowWidth-20, windowHeight/6);
  // rectMode(CORNER);
  // rect(windowWidth/2-180, windowHeight/2-375,7,50);
  image(medIcon, windowWidth/2-150, windowHeight/25,windowHeight/15,windowHeight/15);
  image(pobIcon, windowWidth/2-50, windowHeight/25,windowHeight/15,windowHeight/15);
  image(segIcon, windowWidth/2+50, windowHeight/25,windowHeight/15,windowHeight/15);
  image(econIcon, windowWidth/2+150, windowHeight/25,windowHeight/15,windowHeight/15);

  image(fLEFT, windowWidth/12, windowHeight/2,windowHeight/15,windowHeight/15);
  image(fRIGHT, windowWidth-windowWidth/12, windowHeight/2,windowHeight/15,windowHeight/15);

  imageMode(CENTER);
  image(deckImages[indicedeck], cardX,cardY,windowHeight/2.5,windowHeight/2.5);

}

function accion_IZ(){
  if (cardToDisplay.optIZ != null){
    cardToDisplay=deck[indicedeck].optIZ;
    nextCard();
  }else{
    med=med+deck[indicedeck].valorMED_IZ;
    pob=pob+deck[indicedeck].valorPOB_IZ;
    seg=seg+deck[indicedeck].valorSEG_IZ;
    econ=econ+deck[indicedeck].valorECON_IZ;
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
    med=med+deck[indicedeck].valorMED_DER;
    pob=pob+deck[indicedeck].valorPOB_DER;
    seg=seg+deck[indicedeck].valorSEG_DER;
    econ=econ+deck[indicedeck].valorECON_DER;

    indicedeck++;
    cardToDisplay=deck[indicedeck];
    nextCard();

  }

}



function hoverIZ() {
  loadUI();
  textAlign(CENTER,TOP);
  rectMode(CORNER);
  fill("#000000");
  textFont(GothamB);
  textSize(20);
  textoIZ=text(cardToDisplay.textoIZ, windowWidth/2,windowHeight-windowHeight/6);
  //text(deck[indicedeck].textoIZ, windowWidth/2-100,windowHeight/2+160);
}

function oHIZ() {
  loadUI();
  textAlign(CENTER);
  fill("#000000");
  textFont(GothamB);
  textSize(20);
  textoIZ=text(" ", windowWidth/2-100,windowHeight-windowHeight/10);
}
function hoverDER() {
  loadUI();
  textAlign(CENTER);
  fill("#000000");
  textFont(GothamB);
  textSize(20);
  textoDER=text(cardToDisplay.textoDER, windowWidth/2,windowHeight-windowHeight/6);
}

function oHDER() {
  loadUI();
  textAlign(CENTER);
  fill("#000000");
  textFont(GothamB);
  textSize(20);
  textoIZ=text(" ", windowWidth/2+100,windowHeight-windowHeight/10);
}

function loadGO(){
  //console.log("im here go");
  gameState=1;
  //botonJugar.remove();
  background("#FFFFFF");
  textSize(40);
  textFont(GothamB);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  text("GUEIM OBER uwu", windowWidth/2,windowHeight/2,windowWidth-windowWidth/12,windowHeight-windowHeight/12);
  med = 50;
  pob= 50;
  seg= 50;
  econ= 50;
  indicedeck=0;
  botonJugar.mousePressed(loadUI);
  botonJugar.show();

  botonJugar.size(windowHeight/2,(windowHeight/2)/4);
  botonJugar.position(windowWidth/2-botonJugar.width/2,windowHeight-windowHeight/4);
  botonInfo.size(0,0);
  botonInfo.hide();
  botonPantC.size(0,0);
  botonPantC.hide();
}
function mouseDragged() {
  if (gameState===0 && mouseY>windowHeight/2-windowHeight/8 && mouseY<windowHeight/2+windowHeight/8){
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

  if(gameState===0 && mouseX>windowWidth/2+windowWidth/4&& mouseY>windowHeight/2-windowHeight/8 && mouseY<windowHeight/2+windowHeight/8){
    accion_DER()

  }else if(gameState===0 && mouseX<windowWidth/2-windowWidth/4&& mouseY>windowHeight/2-windowHeight/8 && mouseY<windowHeight/2+windowHeight/8){
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

function loadInfo(){
  //console.log("im here go");
  gameState=4;
  //botonJugar.remove();
  background("#FFFFFF");
  textSize(40);
  textFont(GothamB);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  text("S.A.M.", windowWidth/2,windowHeight/2,windowWidth-windowWidth/12,windowHeight-windowHeight/12);
  botonCerrar.show();
  botonCerrar.size(windowHeight/20,windowHeight/20);
  botonCerrar.position(windowWidth/2-botonPantC.width/2,windowHeight-windowHeight/12);
  botonCerrar.mousePressed(loadUI);
  botonPantC.size(0,0);
  botonPantC.hide();
  botonInfo.size(0,0);
  botonInfo.hide();
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
