import { AnswerType } from "../types/types";

let secretWork = ["h", "e", "l", "l", "o"];
let answer: AnswerType = [];

export default async function logic() {
  const keyboard = document.getElementsByClassName("keyboard")[0];
  const tiles = document.getElementsByClassName("gametiles")[0];

  if (!keyboard) {
    throw new Error("Game Keyboard not found");
  }

  keyboard.addEventListener("click", handleKeyboardClick);
}

async function handleKeyboardClick(e: Event) {
  if (e.target instanceof HTMLButtonElement) {
    const letter = e.target.textContent;
    console.log(letter);

    if (!letter) {
      throw new Error(
        "Something went wrong inserting the letter into the game tile",
      );
    }

    await insertAnswerInRow(answer, letter);

    console.log("answer: ", answer);
  }
}

async function insertAnswerInRow(answer: AnswerType, letter: string) {
  if (!letter) {
    throw new Error("Something went wrong - can't insert answer to tile");
  }
  answer.push(letter);
}
