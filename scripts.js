// 1 - Inserir Dados
localStorage.setItem("nome", "Davi")


// 2 - Restart sem perder os dados


// 3- Resgatar item
const nome = localStorage.getItem("nome")

console.log(nome)

// 3- Resgatar item que não existe

const lastName = localStorage.getItem("lastName")

console.log(lastName)

if(!lastName){
    console.log("Sem sobrenome!")
}
// 5 - remover item

localStorage.removeItem("nome")

// 6 - limpar todos os itens
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

// console.log(typeof localStorage.getItem("a"))

localStorage.clear()

// 1 - sessionStorage
sessionStorage.setItem("number", 123)

// 8 - reiniciar e perder os dados

const n = sessionStorage.getItem("number")

console.log(n)

// sessionStorage.removeItem("number")

sessionStorage.clear()

// 9 - salvar objeto
const person = {
    name: "Davi",
    age: 21,
    job: "Developer",
}

// localStorage.setItem("person", person)

localStorage.setItem("person", JSON.stringify(person))

const getperson = localStorage.getItem("person")

console.log(getperson)

const personObject = JSON.parse(getperson)

console.log(typeof personObject)

console.log(personObject.job)