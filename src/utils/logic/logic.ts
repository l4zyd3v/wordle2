const keyboard = document.getElementsByClassName("keyboard");

let secretWork = ["h", "e", "l", "l", "o"];
let answer = [];

export default async function logic() {
  if (!keyboard[0]) {
    throw new Error("Game Keyboard not found");
  }

  keyboard[0].addEventListener("click", (e) => {
    console.log(e.target);
  });
}
