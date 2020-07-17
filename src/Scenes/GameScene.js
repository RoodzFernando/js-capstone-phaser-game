import Phaser from 'phaser';
import {
  storeScore,
} from '../localStorage';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.score = this.sys.game.globals.score;
    this.add.image(400, 300, 'road');
    this.addCars();
    this.addBorders();
    this.animationHandler();
    this.carSimulation();

    this.initialTime = Date.now();

    function collisionHandler(car) {
      this.physics.pause();
      this.scene.start('GameOver');
      car.setTint(0xff0000);
      this.add.text(this.sys.game.config.width / 2 - 100, this.sys.game.config.height / 2 - 180, 'Collision detected. Retry!', {
        fontSize: '15px',
        fill: '#FFF',
        fontFamily: 'Cascadia Code',
        fontWeight: 'bold',
      });
      this.finalTime = Date.now();
      this.score.score = Math.floor((this.finalTime - this.initialTime) / 1000);
      storeScore(this.score.score);
    }

    // collide handling
    this.physics.add.overlap(this.cars, this.opponents1, collisionHandler, null, this);
    this.physics.add.overlap(this.cars, this.opponents2, collisionHandler, null, this);
    this.physics.add.overlap(this.cars, this.opponents3, collisionHandler, null, this);
    this.physics.add.overlap(this.cars, this.opponents4, collisionHandler, null, this);
    this.physics.add.overlap(this.cars, this.borders, collisionHandler, null, this);
  }

  addCars() {
    this.cars = this.physics.add.sprite((this.sys.game.config.width / 2) + 65, 440, 'cars1');
    this.cars.setCollideWorldBounds(true);
    this.cars.setGravityY(300);
    return this.cars;
  }

  addBorders() {
    this.borders = this.physics.add.staticGroup();
    this.borders.create(110, this.sys.game.config.height - 100, 'border');
    this.borders.create(110, this.sys.game.config.height - 450, 'border');
    this.borders.create(this.sys.game.config.width - 100, this.sys.game.config.height - 100, 'border');
    this.borders.create(this.sys.game.config.width - 100, this.sys.game.config.height - 450, 'border');
  }

  animationHandler() {
    this.frame = Phaser.Math.Between(0, 4);
    this.anims.create({
      key: 'left',
      frames: [{
        key: 'cars1',
        frame: 0,
      }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: [{
        key: 'cars1',
        frame: 0,
      }],
      frameRate: 20,
    });
  }

  carSimulation() {
    this.opponents1 = this.physics.add.group({
      key: 'cars1',
      frame: this.frame < 4 ? this.frame + 1 : this.frame,
      repeat: 0,
      setXY: {
        x: 470,
        y: -650,
      },
    });
    this.opponents1.angle(180);
    this.opponents1.children.iterate((child) => {
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 4500,
        ease: 'Linear',
        yoyo: false,
        loop: -1,
      });
    });

    this.opponents2 = this.physics.add.group({
      key: 'cars1',
      frame: this.frame < 4 ? this.frame + 2 : this.frame,
      repeat: 0,
      setXY: {
        x: 600,
        y: -280,
      },
    });
    this.opponents2.angle(180);
    this.opponents2.children.iterate((child) => {
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 6600,
        ease: 'Linear',
        yoyo: false,
        loop: -1,
      });
    });

    this.opponents3 = this.physics.add.group({
      key: 'cars1',
      frame: this.frame < 4 ? this.frame + 3 : this.frame,
      repeat: 0,
      setXY: {
        x: 210,
        y: -650,
      },
    });
    this.opponents3.angle(180);
    this.opponents3.children.iterate((child) => {
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 4500,
        ease: 'Linear',
        yoyo: false,
        loop: -1,
      });
    });

    this.opponents4 = this.physics.add.group({
      key: 'cars1',
      frame: this.frame < 4 ? this.frame + 1 : this.frame,
      repeat: 0,
      setXY: {
        x: 345,
        y: -680,
      },
    });
    this.opponents4.angle(180);
    this.opponents4.children.iterate((child) => {
      child.setVelocityY(200);
      this.tweens.add({
        targets: child,
        y: this.sys.game.config.height,
        duration: 4800,
        ease: 'Linear',
        yoyo: false,
        loop: -1,
      });
    });
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
}