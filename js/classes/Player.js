//Markeringar sådana som < till > innebär att jag har använt den från en källa (Alla källor ligger i index.html)

//<
class Player extends Sprite {
  constructor({
    collisionBlocks = [],
    imageSrc,
    frameRate,
    animations,
    frameBuffer,
    loop,
    
  }) {
    super({ imageSrc, frameRate, animations, frameBuffer, loop });
    //>
    this.position = { x: 200, y: 200 };
    this.velocity = { x: 0, y: 0 };
    this.gravity = 0.35;
    this.collisionBlocks = collisionBlocks;
    this.UnderPlayer();
  }

  UnderPlayer() {
    this.sides = { bottom: this.position.y + this.height };
  }

  //Gjort all code till methods för att enkelt ropa på de från vart jag vill om jag skulle vilja uppdatera spelet i framtiden.
  update() {
    this.PlayerkollisionTest();

    this.UppdateraPos();

    this.updateHitbox();

    this.HorizontalKoll();

    this.Gravity();

    this.updateHitbox();

    this.VerticalKoll();

    this.checkCanvas();
  }

  handleInput() {
    if (this.preventInput) return;

    if (keys.d.pressed) {
      this.setMovement("runRight", 4, "right");
    } else if (keys.a.pressed) {
      this.setMovement("runLeft", -4, "left");
    } else {
      this.setMovement(
        this.lastDirection === "left" ? "idleLeft" : "idleRight",
        0
      );
    }
  }

  //<
  setMovement(sprite, velocityX, direction) {
    this.switchSprite(sprite);
    this.velocity.x = velocityX;
    this.lastDirection = direction;
  }
  //>

  //<
  switchSprite(name) {
    if (this.image === this.animations[name].image) return;
    this.currentFrame = 0;
    this.image = this.animations[name].image;
    this.frameRate = this.animations[name].frameRate;
    this.frameBuffer = this.animations[name].frameBuffer;
    this.loop = this.animations[name].loop;
    this.currentAnimation = this.animations[name];
  }
  //>

  //<
  updateHitbox() {
    const { x, y } = this.position;

    this.hitbox = {
      position: {
        x: x + 60,
        y: y + 34,
      },
      width: 50,
      height: 53,
    };
  }
  //>

  //För att se vart player kan ungefär
  PlayerkollisionTest() {
    //c.fillStyle = "rgba(0, 0, 255, 1)";
    //c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  UppdateraPos() {
    this.position.x += this.velocity.x;
  }

  HorizontalKoll() {
    for (const collisionBlock of this.collisionBlocks) {
      if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
        this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        const offset =
          //? är samma som en if sats utan en else, och det är mycket enklare och kompakt att ge instruktioner då den kan ge dig t.ex (x)? true value eller : false value
          this.velocity.x < 0 ? this.hitbox.position.x - this.position.x : this.hitbox.position.x - this.position.x + this.hitbox.width; this.position.x =
          this.velocity.x < 0 ? collisionBlock.position.x + collisionBlock.width - offset + 0.01 : collisionBlock.position.x - offset - 0.01;
        break;
      }
    }
  }
  //Tyngdacceleration = 0.3, accelererar neråt för varje frame
  Gravity() {
    const gravityAcceleration = 0.3;
    this.velocity.y += gravityAcceleration;
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;
  }

  VerticalKoll() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      if (
        this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
        this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          const offset = this.hitbox.position.y - this.position.y;
          this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
          break;
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = collisionBlock.position.y - offset - 0.01;
          break;
        }
      }
    }
  }

  //<
  checkCanvas() {
    //Ser till om spelarens hastighet + spelarens längd på bredden är mindre än canvas height, annars sätt hastighet i y led till 0.
    if (this.sides.bottom + this.velocity.y < canvas.height) {
    } else this.velocity.y = 0;
  }
  //>
}
