/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const Pos = [660,390,120]; 
var Omhoog = false
var OmhoogT
var Omlaag = false
var OmlaagT 
var sX = 270 // x-positie van s
var sY = 660 // y-positie van s\
var vX = 1250
var vY =  Pos [Math.floor(Math.random() * Pos.length)]
var vXT = 1400
var vYT = Pos [Math.floor(Math.random() * Pos.length)]
var vXD = 1400
var vYD = Pos [Math.floor(Math.random() * Pos.length)]
var hX = 1250
var hY =  Pos [Math.floor(Math.random() * Pos.length)]
var hXT = 1350
var hYT =  Pos [Math.floor(Math.random() * Pos.length)]
var HP = 0
var img
var imgT
var imgA
var imgAT
var imgAD
var imgAV
var imgAVV
var imgAS
var imgX = 0
var imgTX = 0
var imgTY


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van s, ven en kogels
 */
var begAlles = function () {
  // s
  OmhoogT = Omhoog
  Omhoog = keyIsDown(38)
  if(OmhoogT === false && Omhoog === true ) {sY -= 270;
   }
  OmlaagT = Omlaag
  Omlaag = keyIsDown(40)
  if(OmlaagT === false && Omlaag === true ) {sY += 270;}
  // lvl
  if(HP>5 ){vXT -= 20
            hX-= 18}
    else {vXT = 1400}
    if (HP >10) {vXT -= 3
                      vX -= 3
      hXT -=20}
      else {hXT=1350}
    if (HP > 15) {vXT -= 3
                       vX-= 3
                       hX -= 3
    }
  else if (HP > 20 ) {vXT -= 3
                      vX -=3
                      hXt-=3
                      hX -=3}
    if (HP > 25 ) { vXD -=32
                         vXT -= 2
                        vX -=2
                        hXT-=2
                        hX -=2}
      else {vXD = 1400}
    
  
 //v
  vX -= 20
    if (vX <0)
    { vX = 1280
      vY = Pos [Math.floor(Math.random() * Pos.length)]
  }
    if (vXT<0 )
    { vXT = 1350
      vYT = Pos [Math.floor(Math.random() * Pos.length)]
  }
   if (vXD<0 )
    { vXD = 1400
      vYD = Pos [Math.floor(Math.random() * Pos.length)]
  }
  //h
  hX -= 10
  if (hX < 0) {
    hX = 1280
   hY =  Pos [Math.floor(Math.random() * Pos.length)]}
  
  if (hXT < 0) {
    hXT = 1350
   hYT =  Pos [Math.floor(Math.random() * Pos.length)]}
  // IMG
 
if (imgX <-8720) {
    imgX = 0;}
 imgX -= 3
   if (imgTX <-1000) {
     imgTX = 0
   }
  imgTX -=2
   ;}
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en h
 */
var verwerkBotsing = function () {
  // botsing s tegen v
if (sY - vY <50 &&
    sY - vY >-50 &&
    sX - vX <50 && 
    sX - vX >-50)
{console.log("boem");
HP -= 2
 vY = Pos [Math.floor(Math.random() * Pos.length)]
 vX = 1280
}
  if (sY - vYT <50 &&
    sY - vYT >-50 &&
    sX - vXT <50 && 
    sX - vXT >-50)
{console.log("boem");
HP -= 2
 vYT = Pos [Math.floor(Math.random() * Pos.length)]
 vXT = 1350 }
 if (sY - vYD <50 &&
    sY - vYD >-50 &&
    sX - vXD <50 && 
    sX - vXD >-50)
{console.log("boem");
HP -= 4
 vYD = Pos [Math.floor(Math.random() * Pos.length)]
 vXD = 1400 }
 
  
  // update punten en h
  if (sY - hY <50 &&
    sY - hY >-50 &&
   sX - hX <50 &&
    sX - hX >-50) {
    console.log("hartje ");
    HP += 1
    hX =1300
    hY =  Pos [Math.floor(Math.random() * Pos.length)]
  }
  if (sY - hYT <50 &&
    sY - hYT >-50 &&
   sX - hXT <50 &&
    sX - hXT >-50) {
    console.log("hartje ");
    HP += 2
    hXT =1350
    hYT =  Pos [Math.floor(Math.random() * Pos.length)]
  }
 if (HP < 0)  {
      spelStatus = GAMEOVER;
  }
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function draw() {
 
  // achtergrond
  
  fill(150, 250, 50);
  rect(0, 0, width + 2 * 20, height + 2 * 20);
  image(img,imgX,-1650,10000,4000);
  image(imgT,imgTX,410,1450,50)
  for (var i=0 ; i<20 ; i++){
    var imgTY = 140 + (i * 270);
   image(imgT,imgTX,imgTY,3450,50);
  image(imgA,hX-30, hY-30, 60,60)
  image(imgAT,hXT-30, hYT-30, 60,60)
  image(imgAD,vX-30, vY-30 , 60,60)
  image(imgAD,vXT-30, vYT-30 , 60,60)
  image(imgAV,vXD-30, vYD-30 , 60,60)
  image(imgAS,sX-30, sY-30 , 60,60)}
  if(sX < 25) {sX = sX + 25}
  if(sX > 1255) {sX = sX - 10}
  if(sY < 110) {sY = 120}
  if(sY > 670) {sY = 660}

  
  fill ("white");
  text("Druk F om op te geven",200,20);
  if (keyIsDown(70)){
    spelStatus = GAMEOVER;
  }
  
  // v

  // kogel
  
  // s
  
  // punten en h
fill ("yellow");
  
  textSize(30)
  text(HP,100,25);

}; 

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};
function preload () {
 img = loadImage('./fotos/achter.webp');
  imgT = loadImage('./fotos/grond.png');
  imgA = loadImage('./fotos/among1.png');
  imgAT = loadImage('./fotos/among2.png');
  imgAD = loadImage('./fotos/among3.png');
  imgAV = loadImage('./fotos/among4.png');
  imgAS = loadImage('./fotos/amongS.gif');

}
/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
     begAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over")
     text("Gameover, klik Spatie om opnieuw te spelen.",400,400);
      fill("white");
     if (keyIsDown(32)) {
       document.location.reload();
     }
    }
}



 
 
