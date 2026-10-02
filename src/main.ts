import { Application, Assets } from "pixi.js";
import { MainScreen } from "././screens/MainScreen";

(async () => {
  const app = new Application();

  await app.init({ background: "#1099bb", resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  const textures = [
    "/assets/bkg.png",
    "/assets/board.png",
    "/assets/cell.png",
    "/assets/items/bell.png",
    "/assets/items/bonus.png",
    "/assets/items/cherry.png",
    "/assets/items/crown.png",
    "/assets/items/diamond.png",
    "/assets/items/leamon.png",
    "/assets/items/scatter.png",
    "/assets/items/star.png",
    "/assets/items/wild.png",
  ];

  await Assets.load(textures);

  const mainScreen = new MainScreen(app.stage);
  app.stage.addChild(mainScreen);


})();
