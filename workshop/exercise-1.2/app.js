// Exercise 1.2
// ------------

const clickElement = document.querySelector("body")

setTimeout ( () => {
    clickElement.addEventListener ("click", () => {
        result.innerText = "You Lose!"
    })
    console.log('exercise 1.2');
},1000)
clickElement.addEventListener ("click", () => {
    result.innerText = "You Win!"
})
console.log('exercise 1.2');
