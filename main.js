const c = document.getElementById("gameCanvas");
const shapes = c.getContext("2d");
c.width = 700;
c.height = 500;

let keyIspressed = false;

//gets the source for image and audios

// inital screen sound
let initialScreenmusic = document.createElement("audio");
initialScreenmusic.src ="sound/initialScreen.wav"  ;
initialScreenmusic.loop = true;
initialScreenmusic.volume = 0.6;

let jumpMusic= document.createElement("audio");
jumpMusic.src ="sound/jumpSound.wav"  ;
jumpMusic.volume = 0.75;

// select your character
let MaleJoeImg = document.createElement("img");
MaleJoeImg.src = "img/maleMechJoe.png";

let MaleJoeImgJump = document.createElement("img");
MaleJoeImgJump.src = "img/maleMechJoeJump.png";

let character = MaleJoeImg;

// power up


// health bar status
let healthbarFull = document.createElement("img");
healthbarFull.src = "img/healthBar1.png";

let healthbar3quarter = document.createElement("img");
healthbar3quarter.src = "img/healthBar2.png";

let healthbarhalf = document.createElement("img");
healthbarhalf.src = "img/healthBar3.png";

let healthbarquarter = document.createElement("img");
healthbarquarter.src = "img/healthBar4.png";

let healthbarempty = document.createElement("img");
healthbarempty.src = "img/healthBar5.png";


let game;
let person;
let pow;
let healthbar;
let healthbarImg;
let landscape;


window.addEventListener('load',draw);

// defines a function to start game
function draw() {
    shapes.clearRect(0,0,c.width,c.height);   
  
    if (game === "start") {
        drawStart();
    } else if (game === "gameison") {
        drawrunGame();
    } else {
      drawgameover();
    }
    
    //request ANIMATION FRAME
    requestAnimationFrame(draw);
}

const StartACar = document.getElementById("StartTheCar");

StartACar.addEventListener('click', function (){
   startGame();
   draw();

   document.addEventListener ("keydown",function (event){
    if(event.key === "ArrowUp"){
        person.y -= 60;

        keyIspressed = true;
        jumpMusic.currentTime = 0;
        jumpMusic.play();
   
    } 
})

document.addEventListener("keyup",mouseUpHandler);

function mouseUpHandler() {

    keyIspressed = false;
    jumpMusic.pause();
}

});


function startGame() {
    //start the initiation of the game
    if (game === "start") {
        game = "gameison"
    }

}


        
   







