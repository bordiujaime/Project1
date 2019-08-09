let counter = 0
let level = 1

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


//finalenemy

const enemy3 = new Image();
enemy3.src = "http://www.avatarsinpixels.com/pony/eyJCb2R5IjoiMSIsIlRhaWwiOiI2IiwiTWFyayI6IjEiLCJXaW5ncyI6IjEiLCJFeWVzIjoiNSIsIkhhaXJCb3R0b20iOiIxNiIsImhhaXJUb25lIjoiZDQ1OWVhIiwic2tpblRvbmUiOiIzZmY4YmIiLCJleWVzVG9uZSI6IjY3NzU1OSJ9/1/show.png"


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


//level 3 background
const skyAndTrees = new Image();
skyAndTrees.src = "./27d90765290819.5aef9188431e5.jpg"


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

  ctx.drawImage(enemy2, 300, 300, 50, 50);
  ctx.drawImage(mainCharacter, mainX, mainY, 50, 50);
  checkRightBorder()
  checkThirdQuestion()
}

//level 3 

function drawLevelThree() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 400); //(x, y, width, height)  
  ctx.drawImage(ground, 0, 115, 500, 300);
  ctx.drawImage(skyAndTrees, 0, 0, 500, 400);
  ctx.drawImage(enemy2, 100, 300, 50, 50);
  ctx.drawImage(enemy3, 300, 210, 150, 150);
  ctx.drawImage(mainCharacter, mainX, mainY, 50, 50);

  checkRightBorder()
  checkFourthQuestion()
  checkFifthQuestion()
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
    $('#question1').modal('show');
  }
}
//Second question
function checkThirdQuestion() {
  if (mainX === 300) {
    $('#question2').modal('show');
  }
}
//Third question
function checkFourthQuestion() {
  if (mainX === 100) {
    $('#question3').modal('show');
  }
}

//Fourth question

function checkFifthQuestion() {
  if (mainX === 300) {
    $('#question4').modal('show');
  }
}

//Change Level

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
  counter += 1
  var audio = new Audio('./Audience_Applause-Matthiew11-1206899159.mp3');
  audio.play();
  updateScore();
}

function finalModal() {
  $('#finalModal').modal(focus);
  var audio = new Audio('./Fireworks-SoundBible.com-573238425.mp3');
  audio.play();
}

//Game Over

function gameOver() {

  window.alert("YOU ARE DEAD")
  location.reload()
}


function updateScore() {
  console.log(counter);
  $('#score').html(' ' + counter);
}


//restart again

function startOver() {
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