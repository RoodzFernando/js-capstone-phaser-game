import 'phaser';
import Button from '../Objects/Button';
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.add.image(400, 300, 'road');
    this.cars = this.physics.add.sprite((this.sys.game.config.width / 2) + 65, 450, 'cars1');

    // this.cars.setBounce(0.1);
    this.cars.setCollideWorldBounds(true);
    this.cars.setScale(1.2);
    this.cars.setGravityY(300);
    // this.physics.add.existing(this.cars, true);
      // add the borders
    this.borders = this.add.tileSprite(this.sys.game.config.width/2, 2, 1*32, (40)*32, 'border');
    this.borders2 = this.add.tileSprite(this.sys.game.config.width - 100, 2, 1*32, (40)*32, 'border');
    // this.physics.add.collider(this.cars, this.borders);
    // this.physics.add.collider(this.cars, this.borders2);
    // this.borders.body.immovable =true
    // this.borders.body.collideWorldBounds = true;
    // this.borders.body.immovable = true;
    // this.borders.body.allowGravity = false;
    // this.borders.body.collideWorldBounds =  true;
    // this.borders2.body.collideWorldBounds =  true;
    
    // 
    this.anims.create({
      key: 'left',
      frames: [{
        key: 'cars1',
        frame: 0
      }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: [{
        key: 'cars1',
        frame: 0
      }],
      frameRate: 20
    });
    // populate the colliding cars
    this.opponents = this.physics.add.group({
      key: 'cars1',
      frame: 3,
      repeat: 1,
      setXY: {
        x: 470,
        y: 0,
        stepX: 125,
        // stepY: 155
      }
    });
    this.opponents.angle(180);
    this.opponents.children.iterate((child) => {
      child.setScale(1.2, 1.2);
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 3800,
        // loopDelay: 1000,
        // ease: "Power2",
        ease: "Linear",
        yoyo: false,
        loop: -1
      });
    });
    this.physics.add.collider(this.cars, this.opponents);
    // this.cars.setImmovable(false);
    // populate the left side of the road circulation
    this.leftSide = this.physics.add.group(
      {
        key: 'cars1',
        frame: 1,
        repeat: 1,
        setXY: {
          x: 210,
          y: this.sys.game.config.height,
          stepX: 125,
          stepY: 155
        }
      }
    );
    // iterate
    this.leftSide.children.iterate((child) => {
      child.setScale(1.2, 1.2);
      child.body.setGravityY(5000);
      this.tweens.add({
        targets: child,
        y: -this.sys.game.config.height + 400,
        duration: 3800,
        ease: "Linear",
        yoyo: false,
        loop: -1
      });
    });
    // collide handling
    this.physics.add.overlap(this.cars, this.opponents, collideHandler, null, this);
    function collideHandler(car, opponent) {
      this.physics.pause();
      car.setTint(0xff0000);
      this.add.text(this.sys.game.config.width / 2 -100, this.sys.game.config.height / 2 - 180, "Collision detected. Retry!", {
        fontSize: "15px",
        fill: "#FFF",
        fontFamily: "Cascadia Code",
        fontWeight: "bold"
      });
      this.gameButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Replay', 'Game');

    }
  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.left.isDown) {
      this.cars.setVelocityX(-160);

      this.cars.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.cars.setVelocityX(160);

      this.cars.anims.play('right', true);
    } else {
      this.cars.setVelocityX(0);
    }
  }

  
};