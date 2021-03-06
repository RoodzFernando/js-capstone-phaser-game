import Phaser from 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import GameOverScene from './Scenes/GameOverScene';
import LeaderBoardScene from './Scenes/LeaderBoardScene';
import IntroductionScene from './Scenes/IntroductionScene';
import Model from './Model';
import Score from './Score';
import './style.css';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    const score = new Score();
    this.globals = { model, score, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Introduction', IntroductionScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();