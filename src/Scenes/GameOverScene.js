import 'phaser';
import Button from '../Objects/Button';
// import Config from '../Config/config';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {}
  create() {
    this.score = this.sys.game.globals.score;
    this.scoreTable = this.sys.game.globals.score;
    this.add.image(400, 300, 'road');
    this.add.text(this.sys.game.config.width / 2 - 65, 100, "Game Over", {
      fontSize: "25px",
      fontFamily: "Cascadia Code",
      fill: "#FFF"
    });
    this.gameButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Restart', 'Game');
    this.scoreText = this.add.text(16, 16, `Your time: ${this.score.score}`, {
      fontSize: '40px',
      fill: '#FFF',
      fontFamily: "Cascadia Code"
    });

    this.leaderBoardButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 5, 'blueButton1', 'blueButton2', 'Scores', 'LeaderBoard');
    // test
    // localStorage.setItem("Roodz", `${this.score.score}`);
    // console.log(window.localStorage);
    const div = document.createElement('div');

    div.innerHTML = `
    <input type="text" id="playerName" name="playerName" placeholder="Enter your name: " required><br>
    <input type="submit" name="submit" value="Submit Score!">
    `;
    const element = this.add.dom(this.sys.game.config.width/2, 250, div);
    element.addListener('click');
    element.on('click', (event) => {
      if (event.target.name === 'submit') {
        const inputName = document.getElementById('playerName');

        if (inputName.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          this.username = inputName.value;
          console.log(this.username);
          this.submit = localStorage.setItem(this.username, JSON.stringify(this.score.score));
          console.log(this.submit);
          this.scene.start('LeaderBoard');
          console.clear();
        }
      }
    });
    //
    console.log(localStorage);
    let arr = [];
    for(const [key, value] of Object.entries(localStorage)){
      if (value !== 'INFO') {
        let test = localStorage.getItem(key);
        arr.push([key, Number(value)]);
        console.log(`${key}: ${JSON.parse(test)}`);
      }
    }
    console.log("length", localStorage.length - 1);
    console.log('Here -->')
    let sortable = arr.sort((a,b) => a[1] - b[1]);
    // let scoreTable = [];
    for(let i = sortable.length-1; i >= localStorage.length - 6; i--) {
      this.scoreTable.scoreTable.push(sortable[i]);
    }
    console.log(this.scoreTable.scoreTable);
  }
}