container = document.getElementById("container")


container.innerHTML = `
  <div class="number"> 0 </div>
`
let total = 0
let level = 1

let trueAnwser = document.getElementsByClassName("js-right")
let falseAnwser = document.getElementsByClassName("js-wrong")

//enemy1

const enemy1 = new Image();

enemy1.src = "http://www.avatarsinpixels.com/minipix/eyJFeWVzIjoiMTkiLCJNb3V0aCI6IjEzIiwiU2hvZXMiOiI1IiwiR2xvdmVzIjoiMyIsIlBhbnRzIjoiMyIsIkphY2tldCI6IjMiLCJIYWlyIjoiMTkifQ==/1/show.png";

//enemy2

const enemy2 = new Image();

enemy2.src = "http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjMiLCJFeWVzIjoiMjgiLCJTaG9lcyI6IjEiLCJQYW50cyI6IjIiLCJUb3AiOiIxMCIsIkJlbHQiOiIxIiwiSmFja2V0IjoiMiIsIkNhcGUiOiI1IiwiTmVjayI6IjMiLCJIYWlyIjoiMSIsInNraW5Ub25lIjoiZjFhNTc0IiwiZXllc1RvbmUiOiIwMDAwMDAiLCJoYWlyVG9uZSI6IjI5OWJjNiIsInBhbnRzVG9uZSI6IjYwYzE5NyIsInBhbnRzVG9uZTIiOiIyOTliYzYiLCJjYXBlVG9uZSI6ImI5MWUxZSIsImphY2tldFRvbmUiOiJmMzNjM2MifQ==/1/show.png"

//main character look

const mainCharacter = new Image();
mainCharacter.src = "http://www.avatarsinpixels.com/minipix/eyJFeWVzIjoiMiIsIlNob2VzIjoiMSIsIlBhbnRzIjoiMSIsIlRvcCI6IjEwIiwiSmFja2V0IjoiMyIsIkhhaXIiOiIzIiwic2tpblRvbmUiOiJmMWE1NzQiLCJleWVzVG9uZSI6IjAwMDAwMCIsImhhaXJUb25lIjoiNzMxNTE1IiwicGFudHNUb25lMiI6IjI5OWJjNiJ9/1/show.png";
let mainX = 0
let mainY = 300


//level 1 background

const ground = new Image();
ground.src = "./parallax backgound pack/_01_ground.png"

const bush = new Image();
bush.src = "./parallax backgound pack/_04_bushes.png"

const sky = new Image();
sky.src = "./parallax backgound pack/splash.png"


//level 2 background
const back1 = new Image();
back1.src = "./layers/foreground.png"

const back2 = new Image();
back2.src = "./layers/back-buildings.png"

const back3 = new Image();
back3.src = "./layers/far-buildings.png"




//level 1
function drawLevelOne() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 400); //(x, y, width, height)  

  ctx.drawImage(ground, 0, 115, 500, 300);
  ctx.drawImage(sky, 0, 0, 600, 320);
  ctx.drawImage(bush, 0, 250, 500, 100);
  ctx.drawImage(enemy1, 100, 300, 50, 50);
  ctx.drawImage(enemy1, 300, 300, 50, 50);
  ctx.drawImage(mainCharacter, mainX, mainY, 50, 50);
  checkFirstQuestion()
  checkSecondQuestion()
  checkRightBorder()
}

//level 2

function drawLevelTwo() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 400); //(x, y, width, height)  
  ctx.drawImage(back3, 0, 0, 500, 400);
  ctx.drawImage(back2, 0, 0, 500, 400);
  ctx.drawImage(back1, 0, 0, 500, 400);

  ctx.drawImage(enemy1, 300, 300, 50, 50);
  ctx.drawImage(mainCharacter, mainX, mainY, 50, 50);
  checkRightBorder()
  checkThirdQuestion()
}


//level 3 

function drawLevelThree() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 400); //(x, y, width, height)  

  ctx.drawImage(ground, 0, 115, 500, 300);
  ctx.drawImage(sky, 0, 0, 600, 320);
  ctx.drawImage(enemy1, 100, 300, 50, 50);
  ctx.drawImage(enemy1, 300, 300, 50, 50);
  ctx.drawImage(mainCharacter, mainX, mainY, 50, 50);
  checkRightBorder()
  checkThirdQuestion()
}

function draw() {
  if (level === 1) { drawLevelOne() }
  if (level === 2) { drawLevelTwo() }
  if (level === 3) { drawLevelThree() }
}




//displays welcome alert

function checkFirstQuestion() {
  if (mainX === 100) {
    var welcomeText = prompt("Hey! This is an interactive story.You will have to choose the correct answer. Make one mistake and it's over. Do you want to continues?")

    if (welcomeText === "yes") {
      alert("Excellent!, You may continue");
    }
    else if (welcomeText === "no") {
      gameOver();
    }
    else if (welcomeText === 'Ironhack') {
      alert("Life can be hard but with love and health you will be fine. You can continue");
    }
    else {
      gameOver();
    };
  }
}

//first question

function checkSecondQuestion() {
  if (mainX === 300) {
    $('#question1').modal(focus);
  }
}

function checkThirdQuestion() {
  if (mainX === 300) {
    $('#question2').modal(focus);
  }
}

function checkThirdQuestion() {
  if (mainX === 300) {
    $('#question3').modal(focus);
  }
}



function checkRightBorder() {
  if (mainX === 500) {
    mainX = 0
    level += 1
    draw()
  }
}


//Right anwser

function rightAnswer() {
  $('#youRight').modal(focus);
  total += 1
  number[0].innerHTML = total
}

//Answer Right adds +1 to the counter

function Score() {
  total += 1
  number[0].innerHTML = total
};



//Game Over

function gameOver() {

  window.alert("YOU ARE DEAD")
  location.reload()
}





//onload1

window.onload = function () {

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  draw()

  document.onkeydown = (event) => {
    if (event.keyCode === 39) {
      mainX += 10
    } else if (event.keyCode === 37) {
      mainX -= 10
    };
    draw()
  }
}
