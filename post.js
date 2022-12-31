const mongoose = require('mongoose')    

const tsunSchema = mongoose.Schema({
    tsunName: {type: String, required: true} ,
    Gender:{type: String, required: true} ,
    Affiliation: {type: String, required: true},
    hairStyle: {type: String, required: true},
    hairColor: {type: String, required: true},
    Type: {type: String, required: true}
})

module.exports = mongoose.model('tsunderes', tsunSchema);