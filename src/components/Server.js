var express = require('express')
var app = express();
const cors = require('cors');
var bodyparser = require('body-parser')
var urlencode = bodyparser.urlencoded({ extended: true })
var Food = require('./mongo')
var mongoose = require('mongoose')

var uri = 'mongodb://localhost:27017/food'
mongoose.connect(uri)

app.use(cors())
app.use(express.json());


app.post('/calories', urlencode, (req, res) => {
    var calorie = req.body.calorie
    console.log(calorie)

})

app.get('/calories', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<div>hellos</div>')
    res.end()
})


app.post('/food', urlencode, (req, res) => {
    let name = req.body.name;
    let calorie = req.body.calorie;
    console.log(name)
    console.log(calorie)

    var food = new Food({
        name: name,
        calorie: calorie
    })
    food.save()

    res.send('submitted')
})
app.get('/food', (req, res) => {
    Food.find(function (err, response) {

        console.log(response)
        {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<center>')
            res.write('<table>')

            response.forEach(value => {
                res.write('<tr>')

                res.write(`<td>${value.name}</td>`)
                res.write(`<td>${value.calorie}</td>`)


                res.write('</tr>')

            })
            res.write('<table>')
            res.write('</center>')
            res.end()
        }
    })


})

app.post('/get', urlencode, (req, res) => {
    let name = req.body.name;

    Food.find(function (err, response) {

        if (err) {
            return err
        }
        else {
           
                console.log(response)
                res.send(response)
           
        }
    })
})


app.listen(3001)
{
    console.log('server is running on 3001')
}