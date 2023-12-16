//2
const btn = document.querySelector('#btn')
const terceirobBTN = document.querySelector('#outher-btn')

function imprimir(){
    console.log("Testando")
}

btn.addEventListener("click", imprimir)

//Sem Evento

terceirobBTN.addEventListener('click', () => {

    console.log('evento removido')
    btn.removeEventListener('click',imprimir)

})
//3 - Argumento do Evento

const myTitle = document.querySelector('#my-title')

myTitle.addEventListener('click', (event) =>{
    myTitle.style.color = 'red'
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)

})

//4 - Propagação
const containerBTN = document.querySelector('#btn-container')
const divBTN = document.querySelector('#div-btn')

containerBTN.addEventListener('click', ()=>{
    console.log('Adicionado no carrinho')
    
})

divBTN.addEventListener('click', (event)=>{
    event.stopPropagation()
    console.log('Retirado do Carrinho')

})

// 5 - Removendo evento padrão
const a = document.querySelector('a')
a.addEventListener('click', (e) => {

    e.preventDefault()
    console.log('não executou nada')

})

// 6 - eventos de tecla
document.addEventListener('keyup',(e)=>{

    console.log(`desceu ${e.key}`)

})
document.addEventListener('keydown',(e)=>{

    console.log(`pulou ${e.key}`)

})

// 7 - eventos de mouse

document.addEventListener('mousedown', ()=>{

    console.log('pressionei o mouse')

})
document.addEventListener('mouseup', ()=>{

    console.log('soltei')

})

document.addEventListener('dblclick', ()=>{

    console.log('duplo click')

})

// 8- movimentação do mouse
/*
document.addEventListener('mousemove',(e) =>{
    console.log('moveu')
})
*/

// 9 - scroll

window.addEventListener('scroll',(e)=>{
    console.log('scroll')
})

// 10 - evento de focus/blur
const inputs = document.querySelector("#my-input")
inputs.addEventListener("focus", (event) => { 
    
    console.log('entrou')
    
})
inputs.addEventListener("blur", (event) => { 
    
    console.log('saiu')
    
})

// 11 - Debounce
const debounce = (f,delay) =>{
     
    let timeout


    return(...arguments) => {

        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout( () => {
            f.apply(arguments)
        },delay)

    }

}

window.addEventListener(
    'mousemove',
    debounce(() => {
    console.log('executando')
 },400)
)