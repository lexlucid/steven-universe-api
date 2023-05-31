const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())


let characters = {
    "gems": [
        {
        "name": "Steven Universe",
        "species": "Half-human, half-gem",
        "origin": "Beach City"
        },
        {
            "name": "Pearl",
            "species": "Gem",
            "origin": "Homeworld"
        },
        {
            "name": "Garnet",
            "species": "Gem Fusion",
            "origin": "Homeworld"
        },
        {
            "name": "Amethyst",
            "species": "Gem",
            "origin": "Homeworld"
        },
    ],
    "humans": [
        {
            "name": "Connie",
            "origin": "Beach City"
        },
        {
            "name": "Greg Universe",
            "origin": "Beach City"
        }
    ],
    "unknown": {
        "endpoint": "unknown"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/characters', (request, response) => {
    response.json(characters)
    console.log("I'm working")
})

// app.get('/api/:gems', (request, response) => {
//     const gems = request.params.gems.toLowerCase()
//     console.log(request.params.gems)
//     response.json(characters.gems)
// })

// app.get('/api/:humans', (request, response) => {
//     const humans = request.params.humans.toLowerCase()
//     console.log(request.params.humans)
//     response.json(characters.humans)
// })

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})




