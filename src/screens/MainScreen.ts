import { Container, Sprite } from "pixi.js";
import { BoardScreen } from "./BoardScreen";

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

export class MainScreen extends Container {
  private bkg!: Sprite;
  private boardScreen!: BoardScreen;

  constructor() {
    super();
    this.initialize();
  }

  private initialize() {
    this.initBkg();
    this.initBoardScreen();
    // this.initSpinBtn()
  }

  private initBkg() {
    this.bkg = Sprite.from("/assets/bkg.png");
    this.bkg.anchor.set(0.5);
    this.bkg.position.set(GAME_WIDTH / 2, GAME_HEIGHT / 2);
    this.addChild(this.bkg);
  }

  private initBoardScreen() {
    this.boardScreen = new BoardScreen();
    this.boardScreen.position.set(GAME_WIDTH / 2, GAME_HEIGHT / 2);
    this.addChild(this.boardScreen);
  }
}
