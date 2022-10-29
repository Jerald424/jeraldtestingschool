const express = require('express')
const app = express()
const cors = require('cors')

app.use(express()) //for access req.body
app.use(cors()) // for returning values to client

app.use('/auth', require('./routes/jwtAuth'))

app.listen(5000, () => {
    console.log('app running port 5000')
})