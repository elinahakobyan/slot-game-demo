import {  Container, Sprite, } from "pixi.js";

export class MainScreen extends Container {
    private bkg!: Sprite;
    constructor(private stage: Container) {
        super();

        this.initialize()
    }

    private initialize() {
        this.initBkg()
        // this.initBoardScreen()
        // this.initSpinBtn()
    }

    private initBkg() {
        this.bkg= Sprite.from("/assets/bkg.png");
        this.bkg.anchor.set(0.5);
        this.stage.addChild(this.bkg);
          // app.stage.addChild(bunny);

    }
}