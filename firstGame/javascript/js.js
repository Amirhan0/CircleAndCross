let counter = 0;
let cells = document.querySelectorAll("#title_table td");
let header = document.getElementById("header");

function thisVictory() {
  let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var combo of combos) {
    if (
      cells[combo[0]].innerHTML == cells[combo[1]].innerHTML &&
      cells[combo[1]].innerHTML == cells[combo[2]].innerHTML &&
      cells[combo[0]].innerHTML != ""
    ) {
      return true;
    }
  }
  return false;
}

function tapEvent(event) {
  if (counter % 2 == 0) {
    event.target.innerHTML = '<img src="close.png" width=100>';
  } else {
    event.target.innerHTML = '<img src="circle.png" width=100>';
  }
  if (thisVictory()) {
    for (let cell of cells) {
      cell.addEventListener("click", tapEvent);
    }
    if (counter % 2 == 0) {
      header.innerText = "Крестики победили";
    } else {
      header.innerText = "Нолики победили";
    }
  } else if (counter == 8) {
    header.innerText = "Ничья";
  }
  counter++;
  event.target.removeEventListener("click", tapEvent);
}

function startGame() {
  header.innerText = "Игра началась!";
  counter = 0;
  for (var cell of cells) {
    cell.innerHTML = "";
    cell.addEventListener("click", tapEvent);
  }
}

startGame();
