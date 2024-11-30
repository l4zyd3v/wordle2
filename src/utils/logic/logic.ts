const keyboard = document.getElementsByClassName("keyboard");
const tiles = document.getElementsByClassName("gametiles");

import { AnswerType } from "../../types/types";

let secretWork = ["h", "e", "l", "l", "o"];
let answer: AnswerType = [];

export default async function logic() {
  if (!keyboard[0]) {
    throw new Error("Game Keyboard not found");
  }

  // hello fartyMcFartFace
  // POOOOOOOOOOOOOOOOOOOP

  keyboard[0].addEventListener("click", async (e) => {
    if (e.target instanceof HTMLButtonElement) {
      const letter = e.target.textContent;
      console.log(letter);

      if (!letter) {
        throw new Error(
          "Something went wrong inserting the letter into the game tile",
        );
      }

      await insertAnswerInRow(answer, letter);
      // await validateRow();

      console.log("answer: ", answer);
    }
  });
}

async function insertAnswerInRow(answer: AnswerType, letter: string) {
  if (!letter) {
    throw new Error("Something went wrong - can't insert answer to tile");
  }

  answer.push(letter);
}
