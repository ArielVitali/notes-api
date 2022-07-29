const express = require('express')
const app = express()

let notes = [
    {
        "id":1,
        "nombre":"Ariel",
        "impotant":true
    },
    {
        "id":2,
        "nombre":"Gonza",
        "important":false
    },
    {
        "id":3,
        "nombre":"Pedro",
        "important":false
    }
]

app.get('/',(req,res) =>{
    res.send('<h1>hola mundo <h1>')
})

app.get('/api/notes', (req,res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req,res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    console.log({note})
    res.json(note)
})






const PORT = 3000
app.listen(3000, () => {
    console.log(`Server running on port ${PORT}...`)
})