// 1 - Métodos

/*const animal = {
    nome:"Bob-Molezinha",
    latir:function(){
        console.log("au au")
    }
}

console.log(animal.nome)

animal.latir()

// 2-Aprofundando em métodos

const pessoas = {

    getNome:function(novoNome){

        this.getNome = novoNome;
        return novoNome;
    },

    getIdade:function(novaIdade){

        this.getIdade = novaIdade;
        return novaIdade;
    }
}

console.log(pessoas.getNome("Pedro"))
console.log(pessoas.getIdade(23))

if(novaIdade => 18){
    console.log("Você é maior de idade")
}

// 3- ProtoType

const text = "Alessandro"

console.log(Object.getPrototypeOf(text))

const array = []

console.log(Object.getPrototypeOf(array))

// 5-Classes basicas

const cachorro = {
     raca:null,
     patas:4
}

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao);
console.log(pastorAlemao.patas)

//-Função construtora

function criarCachorro(nome,raca){

    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    
    return cachorro;

}

const bob = criarCachorro("Bob", "Caramelão")
const apolo = criarCachorro("Apollo","PitBull")
console.log(bob)
console.log(apolo)

// 7-Funções como Classes 

function Cachorro(nome,raca){
    this.nome = nome;
    this.raca = raca;

}

const whippet = new Cachorro("Oliver", "Whippet")
console.log(whippet)

// 8- Metodos na função construtora
Cachorro.prototype.uivar = function(){
    console.log("AUUUUUUUUUUUUU!!")
}

whippet.uivar()

//7- classes es6

class cachorroClass {
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}

const apollo = new cachorroClass("Apollo","Pitbull")
console.log(apollo)

/**8- Mais sobre classes  */
/*class caminhaoClass {
     constructor(eixos,cor){
        this.eixos = eixos
        this.cor = cor
     }

     descCaminhao(){
        console.log(`esse caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
     }
}

const scania = new caminhaoClass(6,"Vermelho")
console.log(scania)
scania.descCaminhao()

/**9- Override */
/*class pets {
    constructor(nome,raca,cor,idade){
        this.nome = nome
        this.raca = raca
        this.cor = cor
        this.idade = idade
    }

    Pets(){
        console.log(`meu animal se chama ${this.nome} é da raça ${this.raca} e da cor ${this.cor} e tem ${this.idade} anos de vida`)
    }
}

pets.prototype.idade = "Não definido"
pets.prototype.nome = "Não definido"
pets.prototype.cor = "Não definido"
pets.prototype.raca = "Não definido"


const Candida = new pets("Candida","Pinsher","Branco",13)

Candida.Pets()
console.log(pets.prototype.idade)

/**10- Symbol em classes  */

/*class aviao {
    constructor(marcas, turbinas){
        this.marcas = marcas
        this.turbinas = turbinas
    }
}

const asas = Symbol();
const pilotos = Symbol()
aviao.prototype[asas] = 2;
aviao.prototype[pilotos] = 3;
const gol = new aviao("gol",10)
console.log(gol[asas])

/**Get e Set */

/**class posts {
    constructor(titulo,descricao,tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `aqui vai aparecer algum titulo ${this.titulo}`
    }

    set adicionandoTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const meuPost = new posts("Aqui tem um post de Programação")
console.log(meuPost)
console.log(meuPost.exibirTitulo)

meuPost.adicionandoTags = "Programação ,JavaScript ,Python"
console.log(meuPost)
*/
/** 
class animaTronics{
    constructor(nome,tamanho,cor,tags){
        this.nome = nome
        this.tamanho = tamanho
        this.cor = cor
        this.tags = tags
    }

    get exibirNome(){
        return `O nome desse animatronic é ${this.nome}`
    }

    get exibirTamanho(){
        return `O tamanho desse animatronic é de ${this.tamanho} metros`
    }
    
    get exibirCor(){
        return `O animatronic é da cor ${this.cor}`
    }

    set tagsAnimatronics(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }

}
animaTronics.prototype.tags = "Não definido"
const freedy = new animaTronics("Freddy", 2.23, "Marrom")
freedy.tagsAnimatronics = "Freddy, AnimatronicsFreedy, FNAF"
console.log(freedy.exibirNome)
console.log(freedy.exibirTamanho)
console.log(freedy.exibirCor)
*/

/**class carros {
    constructor(modelo,kilometragem,tags){
        this.modelo = modelo
        this.kilometragem = kilometragem
        this.tags = tags
    }

    get exibirMarca(){
        return`Esse carro é da marca ${this.modelo}`
    }

    get exibirKilometragem(){
        return `esse carro tem ${this.kilometragem} kilometros rodados`
    }

    set myTags(tags){
        const arrayTags = tags.split(", ")
        this.tags = arrayTags
        return `essas são minahs tags ultilizadas ${this.tags}`
    }
}

const Ford = new carros("Ford Ka",260050)
Ford.myTags = "Ford , Ferrari, Fiat"
console.log(Ford.exibirMarca)
console.log(Ford.exibirKilometragem)
console.log(Ford.tags)
*/
//11- Herança

class Mamiferos{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamiferos {
    constructor(patas, nome){
        super(patas,patas)
        this.nome = nome
    }
}

const shark = new Lobo(4,"shark")
console.log(shark)



// 12 InstanceOF

console.log(new Lobo(4,"test") instanceof Mamiferos)                    

