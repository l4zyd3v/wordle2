import "./style.scss";
const app = document.querySelector<HTMLDivElement>("#app");
import { createComponent } from "./utils/utils";
import logic from "./utils/logic/logic";

async function initiate() {
  if (!app) {
    throw new Error("App not found");
  }

  const main = createComponent().main();
  const header = createComponent().header({
    title: "titleText",
    undertitle: "underTitleText",
  });
  const gameBoard = createComponent().characterTiles({
    numberOfRows: 6,
    numberOfChar: 5,
  });
  const keyboard = createComponent().keyBoard();

  main.appendChild(header);
  main.appendChild(gameBoard);
  main.appendChild(keyboard);

  app.appendChild(main);
}

async function start() {
  await initiate();
  await logic();
}

document.addEventListener("DOMContentLoaded", start);
