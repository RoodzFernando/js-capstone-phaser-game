import 'phaser';
import Button from '../Objects/Button';
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.gameButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', {
        volume: 0.5,
        loop: true
      });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
};