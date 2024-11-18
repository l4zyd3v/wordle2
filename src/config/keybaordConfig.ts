import { CreateRowOfButtonsTypes } from "../types/types";
import { createHTML } from "../utils/utils";

const keyArrRowOne = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

const keyArrRowTwo = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

const keyArrRowThree = ["enter", "z", "x", "c", "v", "b", "n", "m", "del"];

function keyboardUtils() {
  return {
    createRowOfButtons: ({
      buttonValues,
      elementName,
      className,
    }: CreateRowOfButtonsTypes) => {
      const row = createHTML({
        elementName: elementName && elementName,
        className: className,
      });

      for (let i = 0; i < buttonValues.length; i++) {
        const key = createHTML({
          elementName: "button",
          className: "key",
          elementContent: keyArrRowOne[i],
        });
        row.appendChild(key);
      }
      return row;
    },
  };
}

export { keyArrRowOne, keyArrRowTwo, keyArrRowThree, keyboardUtils };
