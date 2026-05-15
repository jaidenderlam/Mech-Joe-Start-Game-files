//initial display of the screen
function drawStart() {

 drawMainStuff();   
 //Press start to Play
    shapes.fillStyle = "rgba(37,59,93,0.65)";
    shapes.fillRect(c.width/4,c.height/4+50, 400,150);
        // Title
    shapes.font = "bold 180% Times New Roman";
    shapes.fillStyle = "#DB9DC2";
    shapes.fillText("Press play to start!",c.width/4 +75, c.height* 0.50);

   
}
// while the game is operating
function drawrunGame() {

    
    drawPerson();
    drawMainStuff();
    drawlandscape();
    distanceCount();
}
//when  the game is over
function drawgameover() {
    drawPerson();
    drawMainStuff();
    drawlandscape();
    gameOver();
    
 // game over context

shapes.beginPath();
shapes.lineWidth = 3;
shapes.ellipse(person.x,person.y,100,100,0,0,Math.Pi *2);
shapes.strokeStyle = "#C7761A";
shapes.stroke();

//game over line
shapes.fillStyle = "#8E0909";
shapes.fillText(" Game Over",c.width/4+150,c.height/4+130);

}
//draws main components
function drawMainStuff(){
    // background heading
    shapes.fillStyle = "#253B5D";
    shapes.fillRect(0,0,c.width,80);
        // Title
    shapes.font = "bold 180% Times New Roman";
    shapes.fillStyle = "red";
    shapes.fillText("The Mechanic Man Game",c.width/2-150, c.height* 0.10);

// scores bar
    shapes.fillStyle = "#253B5D";
    shapes.fillRect(0,c.height-80,c.width,80);
 // distance
    shapes.font = "bold 180% Times New Roman";
    shapes.fillStyle = "red";
    shapes.fillText("Distance: " + distances + " m",c.width/2 - 250 ,c.height*0.93);
    shapes.fillText("Best Distance: " + bestDistance + " m", c.width/2 +40, c.height*0.93);
    
 // xp bar 
    shapes.fillStyle = "#253B5D";
    shapes.fillRect(50,100, c.width *0.20, c.height *0.10);

    // points
    shapes.font = "bold 180% Times New Roman";
    shapes.fillStyle = "#3C6F5A";
    shapes.fillText(points + " xp",c.width/4 - 80 ,c.height*0.270);

// health 
    shapes.drawImage(healthbarImg,healthbar.x,healthbar.y,healthbar.w,healthbar.h);

    // landscape base
    shapes.fillStyle = "#535E60";
    shapes.fillRect(0,c.height-120,c.width,40)


}

game = "start"
healthbarImg = healthbarFull;
pow = {
    x: c.width + 150,
    y: Math.random()*c.height,
    w: 20,
    h:20
}

healthbar = {
    x: c.width-120,
    y: c.height * 0.20 - 10,
    w: 50,
    h: 80
}

person = {
    x: c.width/4 -90,
    y: c.height-270,
    w: c.width/5 +5,
    h: c.height/5+50 
}

let distances = 0;
let bestDistance = 0;
let points = 0;
function gameOver () {

    if (bestDistance >= distances) {
    bestDistance = distances;
    distances = 0;
}

}

function distanceCount(){
    distances += 0.5;

}

function drawPerson() {
shapes.drawImage(character,person.x,person.y,person.w,person.h);
jump();
checkCollision();
CollectpowerUp();
}

function checkCollision () {
    if (person.y <=110){
        person.y =110;
    }
}
function jump() {
    if (person.y < c.height-270) {
        person.y += 1.5;
        character = MaleJoeImgJump;
    } else {
        character = MaleJoeImg;
    }
    
}

function CollectpowerUp () {
     
}
function drawlandscape() {
    
}