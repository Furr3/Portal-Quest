//Här ligger alla matte grejer, frågor etc och sen om mattematiken blir rätt från user så initialiseras resten av spelet, osv.
let Rotrandomizer, matte1, mathResult;
let answerText1, answerText2, answerText3, answerText4;
let randomItem, randomText;

let newAnswerText1, newAnswerText2, newAnswerText3, newAnswerText4;
let newRandomItem, newRandomText;

let eqX;
let eqNumb1;
let divisionResult;
let x;

let score = 0;
let highscore = 0;

const scoreElement = document.getElementById("score");
const highscoreElement = document.getElementById("highscore");

function updateScore() {
  scoreElement.textContent = score;
  highscoreElement.textContent = highscore;
}

function increaseScore() {
  score++;
  updateScore();
}

function resetScore() {
  score = 0;
  updateScore();
}

function updateHighscore() {
  if (score > highscore) {
    highscore = score;
    updateScore();
  }
}

function resetValues() {
  //Vad är roten ur 64 t.ex -rot frågor-
  Rotrandomizer = Math.round(Math.random() * Math.PI * 10);
  matte1 = Math.round(Math.sqrt(Rotrandomizer)); //User ska försöka avrunda sina svar, (knapparna är avrundade)
  mathResult = matte1.toString();

  console.log(Rotrandomizer + " Rotfrågan, Random rotfrågor");
  console.log(matte1 + " Roten ur RotFrågan");
  console.log(mathResult + " Resultatet i stringformat");
  //------------------------------------------------------------------------------
  opacityBlock = document.querySelector(".overlay");
  opacityBlock.style.opacity = "0";

  divBlock = document.querySelector("#canvas-container");
  divBlock.style.opacity = "0";

  myCanvas = document.getElementById("canvas1").getContext("2d");
  canvasText = document.getElementById("canvasText").getContext("2d");
  canvasMResult = document.getElementById("canvasMResult").getContext("2d");
  canvasText.clearRect(0, 0, canvasText.canvas.width, canvasText.canvas.height);
  canvasMResult.clearRect(
    0,
    0,
    canvasMResult.canvas.width,
    canvasMResult.canvas.height
  );

  canvasMResult.font = "40px Times Roman";
  canvasMResult.fillStyle = "#FFC0CB";
  canvasText.fillStyle = "#FF3";
  canvasText.font = "35px Times Roman";
  canvasText.fillText("Vad är roten ur: ", 70, 150, 400);
  canvasText.fillText("?", 390, 150, 300);
  canvasMResult.fillText("√ " + Rotrandomizer, 300, 150, 300);
  canvasMResult.font = "15px Times Roman";
  //------------------------------------------------------------------------------

  let answer1 = document.getElementById("canvasBtn1").value;
  let answer2 = document.getElementById("canvasBtn2").value;
  let answer3 = document.getElementById("canvasBtn3").value;
  let answer4 = document.getElementById("canvasBtn4").value;
  var items = [answer1, answer2, answer3, answer4];
  var index = Math.floor(Math.random() * items.length);
  randomItem = items[index];
  //randomItem är en av knapparnas värde. vilket vi sätter : randomText.innerHTML = randomItem(en av knapparnas värde)

  answerText1 = document.getElementById("canvasBtn1");
  answerText2 = document.getElementById("canvasBtn2");
  answerText3 = document.getElementById("canvasBtn3");
  answerText4 = document.getElementById("canvasBtn4");

  var items = [answerText1, answerText2, answerText3, answerText4];
  var index = Math.floor(Math.random() * items.length);
  randomText = items[index];

  //RandomText är slumpen av en av fyra knapparna. (Så knapparnas slot byter plats)

  answerText1.innerHTML = "≈ " + Math.min(matte1 * 3);
  answerText2.innerHTML = "≈ " + Math.round(matte1 * 6);
  answerText3.innerHTML = "≈ " + Math.max(matte1 * 9);
  answerText4.innerHTML = "≈ " + Math.floor(matte1 * 5);

  randomItem = matte1;
  randomText.innerHTML = "≈ " + randomItem;
}

/*
---------------------------------------------------------------------
Försökte lägga in nya frågor och svar såsom algebra men hade inte tid
---------------------------------------------------------------------
function newValues() {
  //If let's say 100x = 50, then we divide and do 50/100 to get x

  eqX = Math.round(Math.random() * Math.PI * 7); //100
  console.log(eqX);

  eqNumb1 = Math.round(Math.random() * Math.PI * 4); //50
  console.log(eqNumb1);

  let eqDivision = (eqX / eqNumb1).toFixed(1);

  // value of x
  divisionResult = eqDivision.toString();

  console.log("divisionResult " + divisionResult);

  //------------------------------------------------------------------------------
  divBlock = document.querySelector("#canvas-container");
  divBlock.style.opacity = "0";

  myCanvas = document.getElementById("canvas1").getContext("2d");
  canvasText = document.getElementById("canvasText").getContext("2d");
  canvasMResult = document.getElementById("canvasMResult").getContext("2d");
  canvasText.clearRect(0, 0, canvasText.canvas.width, canvasText.canvas.height);
  canvasMResult.clearRect(
    0,
    0,
    canvasMResult.canvas.width,
    canvasMResult.canvas.height
  );

  canvasMResult.font = "40px Times Roman";
  canvasMResult.fillStyle = "#516";
  canvasText.fillStyle = "#FF3";
  canvasText.font = "35px Times Roman";
  canvasText.fillText("Vad är : ", 70, 150, 400);
  canvasText.fillText("?", 390, 150, 300);
  canvasMResult.fillText(eqNumb1 + "x" + "+ 5" + "=" + eqX, 300, 150, 300);
  canvasMResult.font = "15px Times Roman";
  //-------------------------

  let newanswer1 = document.getElementById("canvasBtn1").value;
  let newanswer2 = document.getElementById("canvasBtn2").value;
  let newanswer3 = document.getElementById("canvasBtn3").value;
  let newanswer4 = document.getElementById("canvasBtn4").value;
  var newitems = [newanswer1, newanswer2, newanswer3, newanswer4];
  var newindex = Math.floor(Math.random() * newitems.length);
  newrandomItem = newitems[newindex];
  //randomItem är en av knapparnas värde. vilket vi sätter : randomText.innerHTML = randomItem(en av knapparnas värde)

  newanswerText1 = document.getElementById("canvasBtn1");
  newanswerText2 = document.getElementById("canvasBtn2");
  newanswerText3 = document.getElementById("canvasBtn3");
  newanswerText4 = document.getElementById("canvasBtn4");

  var newitems = [
    newanswerText1,
    newanswerText2,
    newanswerText3,
    newanswerText4,
  ];
  var newindex = Math.floor(Math.random() * newitems.length);
  newrandomText = newitems[newindex];

  //RandomText är slumpen av en av fyra knapparna. (Så knapparnas slot byter plats)

  newanswerText1.innerHTML = "≈ " + divisionResult * 1 * 31;
  newanswerText2.innerHTML = "≈ " + divisionResult * 1 * 12;
  newanswerText3.innerHTML = "≈ " + divisionResult * 1 * 21;
  newanswerText4.innerHTML = "≈ " + divisionResult * 1 * 31;

  newrandomText.innerHTML = "≈ " + divisionResult;

  newrandomItem = divisionResult; // = ekvationens värde
  newrandomText.innerHTML = "≈ " + newrandomItem;
}
*/

function questionOne() {
  if (answerText1.innerHTML === "≈ " + randomItem.toString()) {
    var audio8 = new Audio("./Sound/CompleteSound.mp3");
    audio8.play();
    divBlock.style.opacity = "0";
    increaseScore();
    updateHighscore();

    DoorMathOverlay();
  } else if (answerText1.innerHTML != "≈ " + randomItem.toString()) {
    var audio1 = new Audio("./Sound/ErrorWindows.mp3");
    audio1.play();
    resetScore();
    console.log("Error, wrong btn.");
  }
}

function questionTwo() {
  if (answerText2.innerHTML === "≈ " + randomItem.toString()) {
    divBlock.style.opacity = "0";
    var audio8 = new Audio("./Sound/CompleteSound.mp3");
    audio8.play();
    increaseScore();
    updateHighscore();

    DoorMathOverlay();
  } else {
    var audio1 = new Audio("./Sound/ErrorWindows.mp3");
    audio1.play();
    resetScore();
    console.log("Error, wrong btn.");
  }
}

function questionThree() {
  if (answerText3.innerHTML === "≈ " + randomItem.toString()) {
    divBlock.style.opacity = "0";
    var audio8 = new Audio("./Sound/CompleteSound.mp3");
    audio8.play();
    increaseScore();
    updateHighscore();

    DoorMathOverlay();
  } else {
    var audio1 = new Audio("./Sound/ErrorWindows.mp3");
    audio1.play();
    resetScore();
    console.log("Error, wrong btn.");
  }
}

function questionFour() {
  if (answerText4.innerHTML === "≈ " + randomItem.toString()) {
    divBlock.style.opacity = "0";
    var audio8 = new Audio("./Sound/CompleteSound.mp3");
    audio8.play();
    increaseScore();
    updateHighscore();

    DoorMathOverlay();
  } else {
    var audio1 = new Audio("./Sound/ErrorWindows.mp3");
    audio1.play();
    resetScore();
    console.log("Error, wrong btn.");
  }
}
//-------------------------

function DoorMathOverlay() {
  resetValues(); // Reset le values before moving to the next room)

  function goToNextRoom() {
    // Initialize if function is called
    gsap.to(overlay, {
      opacity: 1,
      onComplete: () => {
        level++;
        if (level === 4) level = 1;
        levels[level].init();
        player.switchSprite("idleRight");
        player.preventInput = false;
        gsap.to(overlay, {
          opacity: 0,
        });
      },
    });
  }

  goToNextRoom();
}
resetValues();
