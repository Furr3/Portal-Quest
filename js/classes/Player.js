class Player extends Sprite {
  constructor({ collisionBlocks = [], imageSrc, frameRate }) {
    super({ imageSrc, frameRate });
    this.position = {
      x: 200,
      y: 200,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.gravity = 0.35;

    this.collisionBlocks = collisionBlocks;
  }

  update() {
    c.fillStyle = "rgba(0, 0, 255, 0)";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.playerPositionUpdate();

    this.checkForHorizontalCollisions();

    this.checkForGravity();

    this.checkForVerticalCollisions();

    this.checkForAboveBottomOfCanvas();
  }

  playerPositionUpdate() {
    this.position.x += this.velocity.x;
  }
  checkForHorizontalCollisions() {
    //checks for horizontal collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      //if collision exists
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        //collision on x axis till vänster sida av väggen
        if (this.velocity.x < 0) {
          this.position.x =
            collisionBlock.position.x + collisionBlock.width + 0.01;
          break;
        }

        if (this.velocity.x > 0) {
          this.position.x = collisionBlock.position.x - this.width - 0.01;
          break;
        }
      }
    }
  }

  checkForGravity() {
    //apply gravitation
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;
  }

  checkForVerticalCollisions() {
    //check for vertical collision

    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      //if collision exists
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.position.y =
            collisionBlock.position.y + collisionBlock.height + 0.01;
          break;
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.position.y = collisionBlock.position.y - this.height - 0.01;
          break;
        }
      }
    }
  }

  checkForAboveBottomOfCanvas() {
    //above bottom of canvas
    if (this.sides.bottom + this.velocity.y < canvas.height) {
    } else this.velocity.y = 0;
  }
}
