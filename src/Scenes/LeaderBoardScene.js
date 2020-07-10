import 'phaser';
import GameScene from '../Scenes/GameOverScene';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {}
  create() {
    this.score = this.sys.game.globals.score;
    this.scoreTable = this.sys.game.globals.score;
    this.add.image(400, 300, 'road');
    this.add.text(400, 40, "Leader Board", {
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
    console.log('here leaderboard scene');
    console.log(this.scoreTable.scoreTable);
    let textName = [];
    for (let i = 0; i < this.scoreTable.scoreTable.length; i++) {
      textName.push(this.add.text(300, 100 + (i * 50), `${i+1}-- ${this.scoreTable.scoreTable[i]}`, {fill: "#000"}));
    }
    this.add.text(400, 5, `${textName}`, {
      fontSize: "45px",
      fontFamily: "Cascadia Code",
      fill: "transparent"
    });


    // end
  }
}