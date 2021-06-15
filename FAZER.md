Crie uma pasta que irá conter os arquivos abaixo:
README.md
app.js
database.js
Inicialize o npm : npm init -y               
Crie o script de start:                     //muda de test para start e acressenta nodemon e a pasta
Crie o script start no package.json: "scripts": { "start": "nodemon app.js" }
Crie o .gitignore (node_modules)  // cria uma pasta para n subir pro gitHub
instale as dependências nodemon e readline-sync: npm i --save readline-sync nodemon

No arquivo database crie e exporte a sua base no formato array de objetos contendo alguns dos livros que você já leu ou gostaria de ler com os seguintes campos:

function impar(item) {
  return item % 2 !== 0
}
const numerosImpares = numeros.filter(impar)


const numerosImpares = numeros.filter(item => item % 2 !== 0)
console.log(numerosImpares) // [9, 5]















nome: string
categoria: string
paginas: number
recomenda: boolean
leu: boolean

No arquivo app.js desenvolva sua lógica para o comportamento abaixo:
deverá ser possível buscar livros pela categoria

Me recomenda livros pra ler? Deverá listar livros que já foram lidos e que são recomendados

Minha lista de desejo: Deverá listar livros que ainda não foram lidos

Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de págin