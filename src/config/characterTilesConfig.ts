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
        const attribute = {
          name: "row",
          value: i + 1,
        };

        const row = createHTML({
          elementName: "div",
          className: "gametiles__row",
          attribute: attribute,
        });

        for (let i = 0; i < numberOfChar; i++) {
          const attribute = {
            name: "tile",
            value: i + 1,
          };
          const secondAttribute = {
            name: "last-tile",
            value: i === numberOfChar - 1 ? true : false,
          };

          const tile = createHTML({
            elementName: "div",
            className: "gametiles__tile",
            attribute: attribute,
            secondAttribute: secondAttribute,
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
