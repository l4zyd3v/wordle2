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
  const rows = document.querySelectorAll(".gametiles__row");

  const currentRow: HTMLElement | undefined = findCurrentRow(rows);

  insertLetterInCurrentRow(currentRow);

  // answer.push(letter);
}

function insertLetterInCurrentRow(row: HTMLElement | undefined) {
  console.log(row);
}

function findCurrentRow(rows: NodeListOf<Element>): HTMLElement | undefined {
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] as HTMLElement;

    const tilesAreEmpty = checkTilesEmpty(row);
    // const emptyTile = checkTilesEmpty(row);

    if (tilesAreEmpty) {
      return row;
    }
  }
}

function checkTilesEmpty(row: HTMLElement): boolean | undefined {
  const tiles = row.children;

  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    const tileContent = tile.textContent;

    if (tileContent === "") {
      return true;
    } else {
      return false;
    }
  }
}
