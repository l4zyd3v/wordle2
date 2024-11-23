import "./style.scss";
const app = document.querySelector<HTMLDivElement>("#app");
import { createComponent } from "./utils/utils";

function initiate() {
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

document.addEventListener("DOMContentLoaded", () => {
  initiate();
});
