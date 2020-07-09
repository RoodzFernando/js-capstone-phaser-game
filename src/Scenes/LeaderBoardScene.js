import 'phaser';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor () {
    super('LeaderBoard');
  }

  preload() {}
  create() {
    this.add.image(400, 300, 'road');
    this.add.text(400, 300, "Leader Board", {
      fontSize: "15px",
      fontFamily: "Cascadia Code",
      fill: "#FFF"
    });
    // this.gameButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Restart', 'Game');
    // this.scoreText.setText('Score:' + 5);
    // this.scoreText = this.add.text(16, 16, 'score: 0', {
    //   fontSize: '40px',
    //   fill: '#FFF',
    //   fontFamily: "Cascadia Code"
    // });
  }
} 