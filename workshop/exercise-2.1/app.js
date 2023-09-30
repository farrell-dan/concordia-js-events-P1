
const main = document.querySelector(".main")

for ( numberSquare = 1; numberSquare < 21; numberSquare++){

const newSquare = document.createElement("button")
newSquare.className = ""
newSquare.innerText = numberSquare
main.appendChild(newSquare)

newSquare.addEventListener("click", () => {
    newSquare.classList.add("green");
});
}