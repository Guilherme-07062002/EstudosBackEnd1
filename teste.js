const Sequelize = require('sequelize')
const sequelize = new Sequelize('guiaprogramador', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso.')
}).catch(function (erro) {
    console.log('Falha ao se conectar: ' + erro)
})

// criando model postagens
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "conteudo qualquer"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
// Usuario.sync({forced: true})
Usuario.create({
    nome: 'Guilherme',
    sobrenome: 'Gomes',
    idade: 20,
    email: 'gui@email.com'
})