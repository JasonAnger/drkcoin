const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')

const mongoose = require('mongoose')

const port = process.env.PORT || 80

const Post = require('./models/Post.model')
require('dotenv').config()
mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Mongo Connection is success.")
}).catch(error => handleError(error));


const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))


app.get('/', function(req,res){
    res.render('index')
})

app.get('/nakamotofund', async (req,res) => {
    const post = await Post.where('tags').in(['nakamotofund','tridancoin'])
    res.render('nakamotofund', {posts: post})
})

app.get('/huongdan',  async (req,res) => {
    const post = await Post.where('tags').in(['huongdandrk','tridancoin'])
    res.render('huongdan', {posts: post})
})

app.get('/posts/:id',  async (req,res) => {
    const post = await Post.findOne({_id: req.params.id})
    res.render('post', {post: post})
})

app.use('/*', function(req,res){
    res.redirect('/')
})

app.listen(port, function() {
    console.log('Listening on port',port)
})