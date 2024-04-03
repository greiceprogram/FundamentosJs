//Métodos de String

// const fullName = 'Greice Aparecida Santana'
// console.log(fullName, 'Nome completo')
// const stringToArray = fullName.split('')
// console.table(stringToArray) 
// //Exibe dados tabulares como uma tabela.Essa função recebe um parâmetro obrigatório data, que deve ser um array ou um objeto, e um parametro opcional columns.
// const firstName = stringToArray [0]
// const lastName = stringToArray[3]

// const userName = `Bem vindo, ${firstName} ${lastName}`
// console.log(userName)const list = ['a','b','c','d','e']

// const fullName = 'GreicexAparecidaxSantana'
// console.log(fullName, 'Nome completo')
// const stringToArray = fullName.split('x')   
//  //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
// console.table(stringToArray)

// const firstName = stringToArray [0] //O método toString() retorna uma string representando um array específico e seus elementos.
// const lastName = stringToArray[3]

// const userName = `Bem vindo, ${firstName} ${lastName}`
// console.log(userName)

//O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo
const fullName = 'Eu amo a Valentina'
console.log(fullName.toLowerCase())


//O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
const frase = 'aprendendo javascript'
console.log(frase.toLocaleUpperCase())


//A propriedade length de um objeto String contém o comprimento da string. length é uma propriedade read-only (somente leitura) de instâncias de string. quantidade de letras ou números
const teacherName = 'Lucas'
console.log(teacherName.length)



//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
console.log(fullName.indexOf('Santo'))

//O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.
console.log(fullName.slice('15, 20'))

//Metodos de array
const list = ['a','b','c','d','e']

console.log(list.length, 'array') //length serve tanto para array, quanto para string
console.log(list[4])// para retornar um item de um array é só abrir [] conchetes.

list[5] = 'f'
console.log(list)

list.push('g')// adiciona um novo elemento no final do array
console.log(list, 'push')

console.log(list[list,length -1],'aqui')

list.pop()// remove o ultimo elemento do array
console.log(list, 'pop')

list.shift() // remove o primeiro elemento 
console.log(list, 'shift')

list.unshift() // adiciona os elementos especificados ao início de um array e retorna o novo comprimento do array. ex: 1,2,3- retorna: 4 ,1,2,3.
console.log(list, 'unshift')

//start do slice = valor do lenght anterior
//end = valor real
console.log(list.slice(1,4))

//Objetos

const product = {

name: 'Regata',
price: 49.99,
inStock: true,
sizes: ['P','M','G']

}

console.log(product.name)
console.log(product.price)
console.log(product.inStock)
console.log(product.sizes)

product.color = 'blue' // chama o objeto e defini o que você quer
console.log(product)

//destruturing
const { price, inStock} = product


console.log(price)
console.log(inStock)

//JSON
const dog = {
    name: 'Shark',
    age: 5,
    breed: 'Caramelo'
}

const jsonSt = JSON.stringify (dog)
const jsonReset = JSON.parse(jsonSt)

console.log(jsonSt)
console.log(jsonReset)

//DATA
const data = new Date ()
console.log(data)

//Operadores 
const a = 10
const b = 15

//aritméticos
const soma = a + b 
const subt = a - b
const div = a / b 
const mult = a * b
const por = a % b


console.log(soma, subt, div, mult, por, 'ari')









