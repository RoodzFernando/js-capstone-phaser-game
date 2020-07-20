/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line func-names
/* eslint max-len: [2, 153, 4] */

import Phaser from 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.madeByText = this.add.text(0, 0, ' Created By: Roodz Fernando Fleurant', {
      fontSize: '26px',
      fill: '#fff',
    });

    this.projectText = this.add.text(0, 0, 'A Javascript Capstone project using Phaser 3', {
      fontSize: '26px',
      fill: '#fff',
    });
    this.zone = this.add.zone(this.sys.game.config.width / 2, this.sys.game.config.height / 2, this.sys.game.config.width, this.sys.game.config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.projectText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    this.madeByText.setY(1000);
    this.projectText.setY(2000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });
    this.projectText = this.tweens.add({
      targets: this.projectText,
      y: -400,
      ease: 'Power1',
      duration: 6000,
      delay: 3000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }.bind(this),
    });
  }
}