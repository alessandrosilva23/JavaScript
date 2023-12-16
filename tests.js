const myNav = document.querySelector(".navBar a")
myNav.innerHTML = 'Inicio'

const tellNav = document.querySelector(".tell")
tellNav.innerHTML = 'Contato'

const myDesc = document.querySelector(".desc")
myDesc.innerHTML = 'Saiba Mais' 

//Input

const myName = document.getElementById("my-name")
const myPass = document.getElementById("my-password")
const myForm = document.querySelector(".my-form")
const myBtn = document.querySelector("#my-submit")

myBtn.addEventListener('click', function(event){
    
    const nameValue = myName.value;
    const passValue = myPass.value;
     
    if(nameValue === "" || passValue === ""){
        event.preventDefault

        myName.style.background = "red"
    }

    



})

