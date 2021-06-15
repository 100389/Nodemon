const livros = require('./database') //importar um arquivo dentro do mesmo arquivo
    
livros.sort((a,b)=> a.livro - b.livro )

const entrada = require('readline-sync')       //importando ferramentas

const lidosLivros = entrada.question('Me recomenda livros pra ler?(S/N)')

if( lidosLivros.toLocaleUpperCase() == 'S'){
    console.log('Livros recomendados que foram lidos, eu indico :')
    console.log('Dominando o Excel', 'Amor Para os Corajosos', 'Os Segredos da Mente Milionaria')
    
    const recomendados = entrada.question('Quais livros me recomenda? Dominando o Excel e o Amor para os Corajosos ') // e volta na pag database por conta do requere

    const categoria = livros.filter( livro => livro.categoria == recomendados) //duvida
 
    console.log(categoria)

}
else {
    console.log('Livros lista de desejos:')
    console.table(livros)

}