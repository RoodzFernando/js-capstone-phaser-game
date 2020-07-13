import 'phaser';
import Button from '../Objects/Button';

export default class IntroductionScene extends Phaser.Scene {
  constructor() {
    super('Introduction');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Clash Against the clock...', {
      fontSize: '32px',
      fill: '#fff'
    });
    this.madeByText = this.add.text(0, 0, ' Meet Albert, in a lack moment of attention,\n entered the wrong lane of the road.\n Please help him to make it out of that bad\n situation. Use the arrow left and right to\n avoid the opposite cars.', {
      fontSize: '26px',
      fill: '#fff'
    });
    this.zone = this.add.zone(this.sys.game.config.width / 2, this.sys.game.config.height / 2, this.sys.game.config.width, this.sys.game.config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    this.madeByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 10000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this)
    });

    // button
        this.gameButton = new Button(this, this.sys.game.config.width - 150, this.sys.game.config.height - 100, 'blueButton1', 'blueButton2', 'Skip', 'Title');

  }
};