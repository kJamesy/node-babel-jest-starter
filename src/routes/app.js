import express from 'express'

const app = express.Router()
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello world')
})

module.exports = app
