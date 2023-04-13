window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      if (player.velocity.y === 0) {
        player.velocity.y = -10;
      }

      break;

    case "a":
      //Vänster
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      //Vänster
      keys.a.pressed = false;

      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
