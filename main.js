const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 64 * 16;
canvas.height = 64 * 9;

let parsedCollisions;
let collisionBlocks;
let background;
let doors;

const player = new Player({
  imageSrc: "./img/Idle.png",
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 15,
      loop: true,
      imageSrc: "./img/Idle.png",
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 15,
      loop: true,
      imageSrc: "./img/IdleLeft.png",
    },
    runRight: {
      frameRate: 5,
      frameBuffer: 5,
      loop: true,
      imageSrc: "./img/runRight.png",
    },
    runLeft: {
      frameRate: 5,
      frameBuffer: 5,
      loop: true,
      imageSrc: "./img/runLeft.png",
    },

    enterDoor: {
      frameRate: 8,
      frameBuffer: 15,
      loop: false,
      imageSrc: "./img/enterDoor.png",
      onComplete: () => {
        console.log("completed Animation");
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++;
            levels[level].init();
            player.switchSprite("idleRight");
            player.preventInput = false;
            gsap.to(overlay, {
              opacity: 0,
            });
          },
        });
      },
    },
  },
});
let level = 1;
let levels = {
  1: {
    init: () => {
      parsedCollisions = collData.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/Lev1.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 804,
            y: 273.0,
          },
          imageSrc: "./img/doorOpen.png",
          frameRate: 5,
          frameBuffer: 15,
          loop: false,
          autoplay: false,
        }),
      ];
    },
  },

  2: {
    init: () => {
      parsedCollisions = collData2.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      player.position.x = 200;
      player.position.y = 50;

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./img/Lev2.png",
      });

      doors = [
        new Sprite({
          position: {
            x: 212.0,
            y: 510 - 112,
          },
          imageSrc: "./img/doorOpen.png",
          frameRate: 5,
          frameBuffer: 15,
          loop: false,
          autoplay: false,
        }),
      ];
    },
  },
};

// x-koordinat 804,00 för dörr
//y-koordinat 385,00 för dörr

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

const overlay = {
  opacity: 0,
};

function animate() {
  window.requestAnimationFrame(animate);

  background.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

  doors.forEach((door) => {
    door.draw();
  });

  player.handleInput(keys);
  player.update();
  player.draw();

  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}
levels[level].init();
animate();
