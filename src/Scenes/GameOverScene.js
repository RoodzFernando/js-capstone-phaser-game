import Phaser from 'phaser';
import '../Objects/Button';
import { submitScore } from '../api';
import { getCurrentScore } from '../localStorage';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    const score = getCurrentScore();
    this.score = this.sys.game.globals.score;
    this.add.text(this.sys.game.config.width / 2 - 65, 100, 'Game Over', {
      fontSize: '40px',
      fontFamily: 'Cascadia Code',
      fill: '#FFF',
    });
    this.scoreText = this.add.text(150, 190, ` Nice effort you scored ${this.score.score}.\n Add your initial to submit your score.`, {
      fontSize: '25px',
      fill: '#FFF',
      fontFamily: 'Cascadia Code',
    });
    const div = document.createElement('div');
    div.setAttribute('class', 'score-form');
    div.innerHTML = `
    <input type="text" id="playerName" name="playerName" class="form-control" maxLength="3" placeholder="Add your inititial ex: FRF" required><br>
    <input type="submit" name="submit" class="btn btn-primary" value="Submit Score!">
    `;
    const element = this.add.dom(this.sys.game.config.width - 120, 320, div);
    element.addListener('click');
    element.on('click', (event) => {
      if (event.target.name === 'submit') {
        const inputName = document.getElementById('playerName');

        if (inputName.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          this.username = inputName.value;
          this.submit = submitScore(this.username, score);
          this.scene.start('LeaderBoard');
        }
      }
    });
  }
}