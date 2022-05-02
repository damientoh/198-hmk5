require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')


const nasaApiLink = 'https://api.nasa.gov/planetary/apod?api_key=OZZijxTELgrfiDZIaSA76KWPWNNnwD4aQibTrIDe'

const app = express()

app.use(express.json())
app.use(express.urlencoded())

const port = process.env.PORT || 3000

// CODE GOES Here

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


// Connect To DB
const connectToDb = async () => {
    console.log(`Trying to connect to DB`)
    try {
        await mongoose.connect('mongodb://localhost:27017/decalhomework')
        console.log('db connected!')
    } catch (error) {
        console.log(error.message)
    }
}
connectToDb()

// SCHEMA
const Schema = mongoose.Schema
const apodSchema = Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const APOD = mongoose.model('APOD', apodSchema)

//