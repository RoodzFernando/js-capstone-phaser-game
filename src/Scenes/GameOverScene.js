import 'phaser';
// import config from './Config/config';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOver');
  }

  preload() {}
  create() {
    this.add.image(400, 300, 'road');
    this.add.text(this.sys.game.config.width / 2 - 65, 100, "Game Over", {
      fontSize: "25px",
      fontFamily: "Cascadia Code",
      fill: "#FFF"
    });
     this.gameButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Restart', 'Game');
     // this.scoreText.setText('Score:' + 5);
      this.scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '40px',
        fill: '#FFF',
        fontFamily: "Cascadia Code"
      });

     this.leaderBoardButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 5, 'blueButton1', 'blueButton2', 'Scores', 'LeaderBoard');
     // this.scoreText.setText('Score:' + 5);

     this.score = 'Score: ' + Phaser.Math.FloorTo(this.game.getTime() / 3600)
      this.scoreText = this.add.text(16, 16, `${this.score}`, {
        fontSize: '40px',
        fill: '#FFF',
        fontFamily: "Cascadia Code"
      });
    //  this.scoreText.setText();
  }
}