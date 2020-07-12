import 'phaser';
import GameScene from '../Scenes/GameOverScene';
import {
  getScoreBoard
} from "../api";
import  Button  from "../Objects/Button";

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {};
  create() {
    this.getScores = getScoreBoard();
    // Bi=uttons
    this.restartButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Restart!', 'Game');
    this.menuButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 50, 'blueButton1', 'blueButton2', 'Menu', 'Title');

  }
}