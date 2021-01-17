const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')
const mongoose = require('mongoose')
const hostname = "localhost"

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
    const post = await Post.where('tags').in(['nakamotofund'])
    res.render('nakamotofund', {posts: post})
})

app.get('/huongdan',  async (req,res) => {
    const post = await Post.where('tags').in(['huongdandrk'])
    res.render('huongdan', {posts: post})
})

app.get('/posts/:id',  async (req,res) => {
    const post = await Post.findOne({_id: req.params.id})
    res.render('post', {post: post})
})

app.use('/*', function(req,res){
    res.redirect('/')
})

// app.listen(port, function() {
//     console.log('Listening on port',port)
// })

// const httpServer = http.createServer(app)

const httpServer = http.createServer((req, res) => {
    res.statusCode = 301;
    res.setHeader('Location', `https://${hostname}${req.url}`);
    res.end(); // make sure to call send() or end() to send the response
 });
httpServer.listen(80, () => console.log(`Server is running on Port ${80}.`))

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')), 
        ca: fs.readFileSync(path.join(__dirname, 'cert', 'tridancoin_com.ca-bundle')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'tridancoin_com.crt'))
    }, app
)

sslServer.listen(443, () => console.log(`Secure Server is running on Port ${443}.`))