import "./style.scss";
const app = document.querySelector<HTMLDivElement>("#app");
import { createElement } from "./utils/utils";

function initiate() {
  if (!app) {
    throw new Error("App not found");
  }

  const main = createElement().main();
  const header = createElement().header();
  const gameTilesWrapper = createElement().gameTiles();
  const keyboard = createElement().keyBoard();

  main.appendChild(header);
  main.appendChild(gameTilesWrapper);
  main.appendChild(keyboard);

  app.appendChild(main);
}

document.addEventListener("DOMContentLoaded", () => {
  initiate();
});
