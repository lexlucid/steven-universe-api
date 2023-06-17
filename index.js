const express = require('express')
const app = express()
const cors = require("cors")

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Watermelon Steven!')
})
app.listen(process.env.PORT || 3000)