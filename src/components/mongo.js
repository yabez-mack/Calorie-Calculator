var mongoose = require('mongoose')

var foodSchema = mongoose.Schema({
    name: String,
    calorie: Number
}, { collection: "calorie" })

module.exports= mongoose.model('Food', foodSchema)
