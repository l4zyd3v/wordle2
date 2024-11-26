import { CreateHTMLType } from "../types/types";
import { characterTilesUtils } from "../config/characterTilesConfig";
import {
  keyboardUtils,
  keyArrRowOne,
  keyArrRowTwo,
  keyArrRowThree,
} from "../config/keybaordConfig";

const createHTML = ({
  elementName,
  className,
  elementContent,
}: CreateHTMLType) => {
  if (!elementName) throw new Error("elementName is required");

  const element = document.createElement(elementName);
  element.classList.add(className);

  if (elementContent) element.textContent = elementContent;

  return element;
};

const createComponent = () => {
  return {
    main: () => {
      const main = createHTML({ elementName: "main", className: "main" });

      return main;
    },

    header: ({ title, undertitle }: { title: string; undertitle: string }) => {
      const header = createHTML({ elementName: "header", className: "header" });

      const heading1 = createHTML({
        elementName: "h1",
        className: "header__heading1",
        elementContent: title,
      });

      const heading2 = createHTML({
        elementName: "h2",
        className: "header__heading2",
        elementContent: undertitle,
      });

      header.appendChild(heading1);
      header.appendChild(heading2);

      return header;
    },

    characterTiles: ({
      numberOfRows,
      numberOfChar,
    }: {
      numberOfRows: number;
      numberOfChar: number;
    }) => {
      const characterTiles = characterTilesUtils().createGameBoardTiles({
        numberOfRows: numberOfRows,
        numberOfChar: numberOfChar,
      });
      return characterTiles;
    },

    keyBoard: () => {
      const { createRowOfButtons } = keyboardUtils();
      const keyboard = createHTML({
        elementName: "div",
        className: "keyboard",
      });

      const rowsData = [
        {
          buttonValues: keyArrRowOne,
          elementName: "div",
          className: "keyboard__rows",
        },
        {
          buttonValues: keyArrRowTwo,
          elementName: "div",
          className: "keyboard__rows",
        },
        {
          buttonValues: keyArrRowThree,
          elementName: "div",
          className: "keyboard__rows",
        },
      ];

      rowsData.forEach((rowData) => {
        const row = createRowOfButtons({
          buttonValues: rowData.buttonValues,
          elementName: rowData.elementName,
          className: rowData.className,
        });
        console.log(row.innerText);
        keyboard.appendChild(row);
      });

      return keyboard;
    },
  };
};

export { createComponent, createHTML };
