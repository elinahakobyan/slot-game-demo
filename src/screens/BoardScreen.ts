import { Container, Sprite } from "pixi.js";

export class BoardScreen extends Container {
  private boardBkg!: Sprite;

  constructor() {
    super();
    this.initialize();
  }

  private initialize() {
    this.initBoardBkg();
  }

  private initBoardBkg() {
    this.boardBkg = Sprite.from("/assets/board.png");
    this.boardBkg.anchor.set(0.5);
    this.boardBkg.position.set(0, 0);
    this.addChild(this.boardBkg);
  }
}
