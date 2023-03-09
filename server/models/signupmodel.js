
const mongo = require('mongoose')

const signUpSchema = new mongo.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model('testtable', signUpSchema)