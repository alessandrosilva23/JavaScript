// 1-Movendo-se pelo Dom
console.log(document.body)
console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2- Selecionando por TAG
const listElements = document.getElementsByTagName("li")
console.log(listElements) 

// 3- Selecionando por ID

const myList = document.getElementById("title")
console.log(myList)

// 4 - Selecionando por classes

const myClass = document.getElementsByClassName("product")
console.log(myClass)

// 5 - Selecionando Elementos por CSS 
const productQuery = document.querySelectorAll(".product")
console.log(productQuery)

const mainSelector = document.querySelector("#main-container")
console.log(mainSelector)

// 6 - InsertBefore

const p = document.createElement("p")
const main = myList.parentElement
console.log(main)
main.insertBefore(p,title)

// 7 - appendChild
const listLinks = document.querySelector("nav ul")
const li = document.createElement("li")
listLinks.appendChild(li)

// 8 - replaceChild

const header = title.parentElement


const h2 = document.createElement("P")
h2.textContent = "New text"
header.replaceChild(h2, title)

// 9 - CreateTextNode

const myText = document.createTextNode("Agora vamos colocar mais um titulo")
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)

// 10 Alterando Atribultos com setAttribute e GetAttribute
/*
const firstLinks = listElements.querySelector("a")
console.log(firstLinks)


firstLinks.setAttribulte("href","www.google.com")

*/
// 11 - Altura e Largura

const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// 12 - ClientBoundingRect

const myProduct1 = myClass[0] 

console.log(myProduct1.getBoundingClientRect())

//13 - CSS com JS

mainContainer.style.color = "lightcoral"
mainContainer.style.backgroundColor = "blue"
mainContainer.style.marginLeft = "80px"
mainContainer.style.display = "inline-flex"

//14 - estilizando HTML colection
for(const li of listElements){
    li.style.backgroundColor = "red"
}