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
var Omhoog = false
var OmhoogTwee
var Omlaag = false
var OmlaagTwee 
var spelerX = 270; // x-positie van speler
var spelerY = 580; // y-positie van speler\
var vijandX = 1250
var vijandY = 580
var healthX = 1250
var healthY = 580
var HP = 10


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  OmhoogTwee = Omhoog
  Omhoog = keyIsDown(38)
  if(OmhoogTwee === false && Omhoog === true ) {spelerY -= 270;}
   
  OmlaagTwee = Omlaag
  Omlaag = keyIsDown(40)
  if(OmlaagTwee === false && Omlaag === true ) {spelerY += 270;}
  // vijand
//if ( = SPELEN) {vijandX -= 20}
  vijandX -= 20
  healthX -= 10

  if (healthX < 0) {
    healthX = 1280;}
    if (vijandX <0)
    {vijandX = 1280;
  }
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (spelerY - vijandY <50 &&
    spelerY - vijandY >-50 &&
    spelerX - vijandX <50 && 
    spelerX - vijandX >-50)
{console.log("boem");
HP -= 2
vijandX = 1300}
  
  // botsing kogel tegen vijand

  // update punten en health
  if (spelerY - healthY <50 &&
    spelerY - healthY >-50 &&
   spelerX - healthX <50 &&
    spelerX - healthX >-50) {
    console.log("hartje ");
    HP += 1
    healthX =1300
  }
    if (HP < 1)  {
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
  
  if(spelerX < 25) {spelerX = spelerX + 25}
  if(spelerX > 1255) {spelerX = spelerX - 10}
  if(spelerY < 25) {spelerY = spelerY + 30}
  if(spelerY > 620) {spelerY = spelerY - 45}
  rect (0,140,1450,50)
  rect (0,410,1450,50)
  rect (0,680,1450,50)



  
  // vijand
fill("red");
  ellipse(vijandX, vijandY , 60,60)
  // kogel

  // speler
   fill("white");
  rect(spelerX, spelerY + 70, 10, 30)
  rect(spelerX - 10, spelerY + 70, 10, 30)
 rect(spelerX - 15, spelerY + 20, 30, 50)
  ellipse(spelerX, spelerY , 50, 50)
  

  

  // punten en health
fill ("yellow");
  ellipse(healthX, healthY, 30,30)
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
     beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over")
     text("gameover",550,400);
      fill("black");
    }
}



 
 
