// index.js
const express = require('express')
const {router} = require('./src/student-routes.js')
const cors = require('cors')

const app = express()
const PORT = 4000
const baseUrl = '/api'
app.use(cors())
app.use(express.json())
app.use(baseUrl,router)
app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})



// Export the Express API
module.exports = app