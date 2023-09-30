// Exercise 1.3
// ------------

const clickElement = document.querySelector("body")
const time = document.getElementById("time");

const randomSeconds = Math.floor(Math.random()*5);
const randomMiliseconds = randomSeconds * 1000;

time.innerText = randomSeconds

setTimeout ( () => {
    clickElement.addEventListener("click", () =>{
        result.innerText = "You Lose!"
    })
}, randomMiliseconds)
 

clickElement.addEventListener("click", () => {
    result.innerText = "You Win!"
})



console.log(time);
console.log(randomSeconds);
console.log(randomMiliseconds);

console.log('exercise 1.3');
