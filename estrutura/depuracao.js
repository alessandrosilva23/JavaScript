//1- Strict
/*"use scrict ";

const opa = "Testando"
const undefined = 10; 
delete[].length;

//2-Console.log
let a = 1
let b = 2

if(a === 1){
    a = b + 2
}

console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2
    console.log(a)
}
*/
//3- Tratamento de dados

function checkNumber(n){

    const result =  Number(n)

    if (Number.isNaN(result)){
        console.log("Valor incorreto")
        return;
    }
    console.log("Valor correto")
    return result;
}
checkNumber(5)
checkNumber("test")
checkNumber({})
checkNumber("5.2")

//4 - exceptions

/**
  let x = 10

if(x != 11) {
    
    throw new Error("Valor invalido");
     
}

 */


// 5 - Try e catch

try{
    const soma = x + y
}catch(error){
    console.log(`Erro no programa: ${error}`)
}

// 6 - Finally

try{
    const value = checkNumber("asd")

    if(!value){
        throw new Error("Valores invalidos")
    }
}catch(error){
    console.log(`Opa, aconteceu um problema ${error}`)
}finally{
    console.log("O codigo foi executado ")
}

// 8 - Assetions

function checkArray(arr){

    if(arr.length === 0){
        throw new Error("O array precisa de elementos")
    }else {
        console.log(`O array tem ${arr.length} elementos`)
    }

}

checkArray([3,5,7,6,2,1])