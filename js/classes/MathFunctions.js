//Här ligger alla matte grejer, frågor etc och sen om mattematiken blir rätt från user så initialiseras resten av spelet, osv.

//Vad är roten ur 64 t.ex -rot frågor-
let Rotrandomizer = Math.round(Math.random() * Math.PI * 10);
let matte1 = Math.sqrt(Rotrandomizer); //User ska försöka avrunda
let mathResult = matte1.toString();

//Addition lösningar
//-------------------------

//-------------------------

console.log(Rotrandomizer + " Rotfrågan, Random rotfrågor");
console.log(matte1 + " Roten ur RotFrågan");
console.log(mathResult + " Resultatet i stringformat");

function DoorMathOverlay() {
  myCanvas = document.getElementById("canvas1").getContext("2d");
  canvasText = document.getElementById("canvasText").getContext("2d");
  canvasMResult = document.getElementById("canvasMResult").getContext("2d");

  canvasMResult.font = "40px Times Roman";
  canvasMResult.fillStyle = "#516";
  canvasMResult.fillText(Rotrandomizer + " ?", 380, 152, 300);

  canvasText.fillStyle = "#FF3";

  canvasText.font = "40px Times Roman";
  canvasText.fillText("Vad är roten ur: ", 100, 150, 300);

  canvasText.font = "40px Times Roman";
  // Get the button element
  const button = document.getElementById("canvasBtn4");

  // Add an event listener to the button
  button.addEventListener("click", questionFour);

  // Button click event handler
  function questionFour() {
    console.log("Button clicked");
    // Handle button click event here
  }

  function goToNextRoom() {
    //Initalized if function is called
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

    doorCanvas.style.display = "block";
  }
}
