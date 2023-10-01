
const main = document.querySelector(".main")


const newCircle = () => {

    const changeColour = (event) => {
        const button = event.target;
        button.classList.toggle("green")
        }
    
    const randomPosition = () => {
        const maxHeight = window.innerHeight - 50;
        const maxWidth = window.innerWidth - 50;
        const randomY = Math.floor(Math.random()* maxHeight);
        const randomX = Math.floor(Math.random()* maxWidth);
        return {top: randomY + "px", left: randomX + "px"};
    }

    for ( numberofCircles = 1 ; numberofCircles <= 20; numberofCircles ++){
            const button = document.createElement("button");
            button.className = "";
            button.innerText = numberofCircles;
            button.addEventListener("click", changeColour);
            const position = randomPosition();
            button.style.top = position.top
            button.style.left = position.left
            main.appendChild(button);
        }  
}
newCircle(20)


