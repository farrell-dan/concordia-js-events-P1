const main = document.querySelector(".main")

const header = document.createElement("div");
header.className = "header";
main.appendChild(header)

const gameBoard = document.createElement("div");
gameBoard.className = "board";
main.appendChild(gameBoard)

const start = document.createElement("button")
start.className ="start";
start.innerText = "start";
header.appendChild(start)