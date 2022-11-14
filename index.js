const express = require('express')
const app = express()

const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const Post = require('./models/Post')
const { where } = require('sequelize')

// Config
// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res) => {
    Post.findAll().then((posts) => {
        res.render('home', { posts: posts })

    })
})

app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro)
    })
    // res.send("Texto: " + req.body.titulo + " Conteúdo: " + req.body.conteudo)
})

app.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { 'id': req.params.id } }).then(() => {
        res.send('Postagem deletada.')
    }).catch((erro) => {
        res.send('Essa postagem não existe.')
    })
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/html/index.html')    
// });
// app.get('/seg', (req, res) =>{
//     res.sendFile(__dirname + '/html/segundo.html')
// })

app.listen(3000, () => {
    console.log('rodando...')
})