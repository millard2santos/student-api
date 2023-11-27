// index.js
const express = require('express')
const {router} = require('./src/student-routes.js')
const cors = require('cors')

const app = express()
const PORT = 4000
app.use(cors())
const baseUrl = '/api'
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})
app.use(baseUrl,router)

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})



// Export the Express API
module.exports = app