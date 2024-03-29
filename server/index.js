const express = require('express');
const app = express()
const mongo  = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')
dotenv.config()
mongo.connect(process.env.DATABASE_ACCESS, {

    useUnifiedTopology: true,

    useNewUrlParser: true,

}).then(console.log('connect sucess to mongodb'))
app.use(cors())
app.use(express.json())
app.use('/app', routeUrls)
app.listen(4000, () => console.log("Server is connected to mongodb and running"))