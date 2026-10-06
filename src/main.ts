import { Application, Assets } from "pixi.js";
import { MainScreen } from "./screens/MainScreen";

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 1080;

(async () => {
  const app = new Application();

  await app.init({
    background: "#1099bb",
    resizeTo: window,
    antialias: true,
  });

  const container = document.getElementById("pixi-container");
  if (!container) {
    throw new Error("pixi-container not found");
  }

  container.appendChild(app.canvas);

  const resizeGame = () => {
    const scale = Math.min(
      window.innerWidth / GAME_WIDTH,
      window.innerHeight / GAME_HEIGHT,
    );

    app.stage.scale.set(scale);
    app.stage.position.set(
      (window.innerWidth - GAME_WIDTH * scale) / 2,
      (window.innerHeight - GAME_HEIGHT * scale) / 2,
    );
  };

  window.addEventListener("resize", resizeGame);
  window.addEventListener("orientationchange", resizeGame);
  resizeGame();

  const textures = [
    "/assets/bkg.png",
    "/assets/board.png",
    "/assets/cell.png",
    "/assets/items/bell.png",
    "/assets/items/bonus.png",
    "/assets/items/cherry.png",
    "/assets/items/crown.png",
    "/assets/items/diamond.png",
    "/assets/items/lemon.png",
    "/assets/items/scatter.png",
    "/assets/items/star.png",
    "/assets/items/wild.png",
  ];

  await Assets.load(textures);

  const mainScreen = new MainScreen();
  app.stage.addChild(mainScreen);
})();
