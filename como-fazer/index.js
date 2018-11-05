const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.port || 3000;

app.get('/', async (req, res) => {
    const content = await axios.get('https://como-fazer-devpleno-18.firebaseio.com/teste.json')
    
    console.log(content.data)
    res.render('index', {i: content.data})
})

app.use('/categorias', categorias)

app.listen(port, (err) => {
    if (err) {
        console.log('Erro: ', err)
    } else {
        console.log('Como-Fazer server is running on port: ',port)
    }
})

module.exports = app