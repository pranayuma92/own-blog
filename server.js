const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'src')))
app.use(cors())

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.listen(PORT, () => console.log('Listening port:', PORT))