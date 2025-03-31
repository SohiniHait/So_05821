const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('CSEDS//22//058')
})

app.get('/courses', function (req, res) {
  res.send('Print all courses')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
