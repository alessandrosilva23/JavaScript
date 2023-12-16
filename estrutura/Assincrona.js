//1-Set_TimeOut
/*console.log("Ainda não executou")

setTimeout(function(){

    console.log("Requisição Assicrona")

}, 2000)

console.log("Ainda não executou 2")
*/

//2- setInterval

/*console.log("Ainda não começou")

setInterval(function(){
    console.log("Intervalo Assíncrona")
}, 3000);

console.log("Ainda não começou 2")
*/

//3- Promise

/*const promessa = Promise.resolve( 5 + 5)

console.log("Algum codigo")

promessa.then((value) => {
    console.log(`O valor da soma é ${value}`)
    return value
})
 .then((value) => value - 1)
 .then((value) => console.log(`valor agora é ${value}`))

console.log("Outro codigo")
*/

//4- Falha no promise
/*Promise.resolve(14 / "sad")

.then((numero) =>{
    if(Number.isNaN(numero)){
        throw new Error("O valor inserido está invalido")
    }
    return numero
})

.catch((erros) => console.log(`Falha detectada ${erros}`))
*/
//5- Rejeição de Promise

/*function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve(`O numero é maior que 10`)
        }
        else {
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(20)

const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)).catch(err => console.log(`Um erro correu ${err}`))
*/

//6-Resolvendo varias promise

/*const p1 = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve(10)
    },1000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    }else{
        reject("Erro!")
    }
});

Promise.all([p1,p2,p3]).then((values ) => console.log(values))
*/
//7-async function
/*
async function somarComDelay(a,b){
    return a+b
}

somarComDelay(2,4).then((value) => {console.log(`Soma de A + B é ${value}`)
});
*/

//8- async await

/*function resolveComDelay(){
    return new Promise((resolve) => {

    setTimeout(()=>{
        resolve("Resolveu a promise")
        },2000)
    })  
}

async function chamandoResolve(){
    console.log("Esperando  o resultado da promise")
    const result = await resolveComDelay()
    console.log(`O resultado chegou ${result}`)
}

chamandoResolve()
*/

//9- generator 

function* generator(){
    yield 1;
    yield 2;
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)