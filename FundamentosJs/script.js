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

list.push('g')
console.log(list, 'push')

console.log(list[list,length -1],'aqui')

list.pop()
console.log(list)



