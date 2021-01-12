const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')

const port = process.env.PORT || 3000

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))


app.get('/', function(req,res){
    res.render('index')
})

app.use('/*', function(req,res){
    res.redirect('/')
})

app.listen(port, function() {
    console.log('Listening on port',port)
})