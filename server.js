const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routers/routes')
require('dotenv').config()

const mongoString = process.env.DATABASE_URL
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use('/api',routes)
 
mongoose.set('strictQuery', true)
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

