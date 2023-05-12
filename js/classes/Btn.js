//Markeringar sådana som < till > innebär att jag har använt den från en källa (Alla källor ligger i index.html)

var runAudio1 = new Audio("./Sound/Running.mp3");
var runAudio2 = new Audio("./Sound/Running.mp3");

window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;
  switch (event.key) {
    case "w":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];

        //Tittar om spelarens hitbox ligger på dörrens position, om den gör det kan vi stänga av spelarens rörelse och låta animationen fortsätta, (spriteombyte)
        
        if (player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && player.hitbox.position.x >= door.position.x && player.hitbox.position.y + player.hitbox.height >= door.position.y && player.hitbox.position.y <= door.position.y + door.height) {
          //Timeouta så att dörren spelas samtidigt som animationen, och inte före eller efter.
          setTimeout(() => {
            var audio = new Audio("./Sound/doorOpen.mp3");
            audio.play();
          }, 200);

          //Om if statsen stämmer, alltså player hitbox x,y är innanför dörren så kan vi sätta spelarens hastiget på x led samtidigt som y led till 0 vilket leder till att preventInput = true, 
          setTimeout(() => {
            player.velocity.x = 0;
            player.velocity.y = 0;
            player.preventInput = true;
            player.switchSprite("enterDoor");
            door.play();
          }, 500);

          return;
        }
      }

      if (player.velocity.y === 0) {
        player.velocity.y = -10;

        var audio = new Audio("./Sound/JumpSound.mp3");
        var audio1 = new Audio("./Sound/JumpSound2.mp3");

        var random = Math.random();

        var sound = random < 0.5 ? audio1 : audio;

        sound.play();
      }
      break;

    case "a":
      //Vänster
      keys.a.pressed = true;
      runAudio1.play();
      break;
    case "d":
      //höger
      keys.d.pressed = true;
      runAudio2.play();
      break;
  }
});

//Knappar som används i spelet, W(För att hoppa och gå igenom dörrar, a(left), (d(höger)))
const keys = {
  w: {
    pressed: false,
  },

  a: {
    pressed: false,
  },

  d: {
    pressed: false,
  },
};

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      //Vänster
      keys.a.pressed = false;
      //Förbättrar ljudsystemet när man går genom att använda runAudio1.pause() så ljuded stannar så fort knappen släpps.
      runAudio1.pause();
      runAudio1.currentTime = 0;
      break;
    case "d":
      //Förbättrar ljudsystemet när man går genom att använda runAudio2.pause() så ljuded stannar så fort knappen släpps.
      runAudio2.pause();
      runAudio2.currentTime = 0;
      keys.d.pressed = false;
      break;
  }
});
