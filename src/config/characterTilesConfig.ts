import { CharacterTilesUtilsTypes } from "../types/types";
import { createHTML } from "../utils/utils";

function characterTilesUtils() {
  return {
    createGameBoardTiles: ({
      numberOfRows,
      numberOfChar,
    }: CharacterTilesUtilsTypes) => {
      const characterTiles = createHTML({
        elementName: "div",
        className: "gametiles",
      });

      for (let i = 0; i < numberOfRows; i++) {
        const row = createHTML({
          elementName: "div",
          className: "gametiles__row",
        });

        for (let i = 0; i < numberOfChar; i++) {
          const tile = createHTML({
            elementName: "div",
            className: "gametiles__tile",
          });
          row.appendChild(tile);
        }

        characterTiles.appendChild(row);
      }

      return characterTiles;
    },
  };
}

export { characterTilesUtils };
