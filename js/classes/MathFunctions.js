//Här ligger alla matte grejer, frågor etc och sen om mattematiken blir rätt från user så initialiseras resten av spelet, osv.
let Rotrandomizer, matte1, mathResult;
let answerText1, answerText2, answerText3, answerText4;
let randomItem, randomText;

function resetValues() {
  //Vad är roten ur 64 t.ex -rot frågor-
  Rotrandomizer = Math.round(Math.random() * Math.PI * 10);
  matte1 = Math.round(Math.sqrt(Rotrandomizer)); //User ska försöka avrunda
  mathResult = matte1.toString();

  console.log(Rotrandomizer + " Rotfrågan, Random rotfrågor");
  console.log(matte1 + " Roten ur RotFrågan");
  console.log(mathResult + " Resultatet i stringformat");
  //------------------------------------------------------------------------------
  divBlock = document.querySelector("#canvas-container");
  divBlock.style.opacity = "0";

  myCanvas = document.getElementById("canvas1").getContext("2d");
  canvasText = document.getElementById("canvasText").getContext("2d");
  canvasMResult = document.getElementById("canvasMResult").getContext("2d");
  canvasText.clearRect(0, 0, canvasText.canvas.width, canvasText.canvas.height);
  canvasMResult.clearRect(0,0,canvasMResult.canvas.width,canvasMResult.canvas.height);

  canvasMResult.font = "40px Times Roman";
  canvasMResult.fillStyle = "#516";
  canvasText.fillStyle = "#FF3";
  canvasText.font = "35px Times Roman";
  canvasText.fillText("Vad är roten ur: ", 70, 150, 400);
  canvasText.fillText("?", 390, 150, 300);
  canvasMResult.fillText("√ " + Rotrandomizer, 300, 150, 300);
  canvasMResult.font = "15px Times Roman";
  //-------------------------

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

  answerText1.innerHTML = matte1 * 9;
  answerText2.innerHTML = matte1 * 3;
  answerText3.innerHTML = matte1 * 7;
  answerText4.innerHTML = matte1 * 5;

  randomItem = matte1;
  randomText.innerHTML = randomItem;
}

function questionOne() {
  if (answerText1.innerHTML === randomItem.toString()) {
    divBlock.style.opacity = "0";
    DoorMathOverlay();
  } else {
    console.log("Error, wrong btn.");
  }
}

function questionTwo() {
  if (answerText2.innerHTML === randomItem.toString()) {
    divBlock.style.opacity = "0";
    DoorMathOverlay();
  } else {
    console.log("Error, wrong btn.");
  }
}

function questionThree() {
  if (answerText3.innerHTML === randomItem.toString()) {
    divBlock.style.opacity = "0";
    DoorMathOverlay();
  } else {
    console.log("Error, wrong btn.");
  }
}

function questionFour() {
  if (answerText4.innerHTML === randomItem.toString()) {
    divBlock.style.opacity = "0";
    DoorMathOverlay();
  } else {
    console.log("Error, wrong btn.");
  }
}

//-------------------------

function DoorMathOverlay() {
  resetValues(); // Reset the values before moving to the next room

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
