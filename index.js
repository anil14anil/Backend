require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000
console.log("add")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
  res.send('<h1>Hello Facebook!</h1>')
})

app.get('/login', (req, res) => {
  res.send('<h2>Please enter with login code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})