import 'phaser';
import Button from '../Objects/Button';
// import GameOverScene from './Scenes/GameOverScene';
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.score = this.sys.game.globals.score;
    this.add.image(400, 300, 'road');
    this.cars = this.physics.add.sprite((this.sys.game.config.width / 2) + 65, 440, 'cars1');


    this.cars.setCollideWorldBounds(true);
    this.cars.setScale(1.2);
    this.cars.setGravityY(300);

    // add the borders
    this.borders = this.physics.add.staticGroup();
    // left
    this.borders.create(110, this.sys.game.config.height-100, 'border');
    this.borders.create(110, this.sys.game.config.height - 450, 'border');
    // right
    this.borders.create(this.sys.game.config.width - 100, this.sys.game.config.height - 100, 'border');
    this.borders.create(this.sys.game.config.width - 100, this.sys.game.config.height - 450, 'border');

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
// first opponent
    this.opponents1 = this.physics.add.group({
      key: 'cars1',
      frame: Phaser.Math.Between(0, 4),
      repeat: 0,
      setXY: {
        x: 470,
        y: -650,
        // stepX: 125,
        // stepY: 155
      }
    });
    this.opponents1.angle(180);
    // this.opponents1.setSize(2);
    // console.log(this.opponents1);
    this.opponents1.children.iterate((child) => {
      child.setScale(1.2, 1.2);
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 4500,
        ease: "Linear",
        yoyo: false,
        loop: -1
      });
    });
    // second opponent
    this.opponents2 = this.physics.add.group({
      key: 'cars1',
      frame: Phaser.Math.Between(0, 4),
      repeat: 0,
      setXY: {
        x: 600,
        y: -280,
        // offset: -1000
        // stepX: 125,
      }
    });
    this.opponents2.angle(180);
    this.opponents2.children.iterate((child) => {
      child.setScale(1.2, 1.2);
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 5600,
        ease: "Linear",
        yoyo: false,
        loop: -1
      });
    });
    // third opponent
    this.opponents3 = this.physics.add.group({
      key: 'cars1',
      frame: Phaser.Math.Between(0, 4),
      repeat: 0,
      setXY: {
        x: 210,
        y: -650,
        // stepX: 125,
        // stepY: 155
      }
    });
    this.opponents3.angle(180);
    this.opponents3.children.iterate((child) => {
      child.setScale(1.2, 1.2);
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 4500,
        ease: "Linear",
        yoyo: false,
        loop: -1
      });
    });
    // fourth opponent
    
    this.opponents4 = this.physics.add.group({
      key: 'cars1',
      frame: Phaser.Math.Between(0, 4),
      repeat: 0,
      setXY: {
        x: 345,
        y: -680,
        // offset: -10
        // stepX: 125,
        // stepY: 155
      }
    });
    this.opponents4.angle(180);
    this.opponents4.children.iterate((child) => {
      child.setScale(1.2, 1.2);
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 3800,
        ease: "Linear",
        yoyo: false,
        loop: -1,
        // offset: 200
      });
    });
   
    let collisionVar = false;
    this.initialTime = Date.now();
    this.gameDuration;

    function collideHandler(car, opponent) {
      console.log(Phaser.Math.Between(0,4));
      this.physics.pause();
      this.scene.start('GameOver');
      collisionVar = true;
      car.setTint(0xff0000);
      this.add.text(this.sys.game.config.width / 2 - 100, this.sys.game.config.height / 2 - 180, "Collision detected. Retry!", {
        fontSize: "15px",
        fill: "#FFF",
        fontFamily: "Cascadia Code",
        fontWeight: "bold"
      });
      this.finalTime = Date.now();
      this.score.score = Math.floor((this.finalTime - this.initialTime)/1000) ;
      // console.log(this.score.score);
    }

     // collide handling
    //  this.physics.add.overlap(this.cars, this.opponents1, collideHandler, null, this);
    //  this.physics.add.overlap(this.cars, this.opponents2, collideHandler, null, this);
    //  this.physics.add.overlap(this.cars, this.opponents3, collideHandler, null, this);
    //  this.physics.add.overlap(this.cars, this.opponents4, collideHandler, null, this);
     this.physics.add.overlap(this.cars, this.borders, collideHandler, null, this);
    // console.log('Here');
    // console.log(this.score.score);
  }


  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.left.isDown) {
      this.cars.setVelocityX(-250);
      this.cars.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.cars.setVelocityX(250);

      this.cars.anims.play('right', true);
    } else {
      this.cars.setVelocityX(0);
    }
  }
};