const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 64 * 16;
canvas.height = 64 * 9;

const collisionBlocks = [];

const parsedCollisions = collData.parse2D();
const collisionsBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/Lev1.png",
});

const player = new Player({
  collisionBlocks,
});
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
//let bottom = y + 100;

function animate() {
  window.requestAnimationFrame(animate);

  backgroundLevel1.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });
  player.velocity.x = 0;
  if (keys.d.pressed) player.velocity.x = 3;
  else if (keys.a.pressed) player.velocity.x = -3;

  player.update();
  player.draw();
}

animate();
