const express = require('express')
const app = express()

app.use(express.json)

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
    if(note){
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/notes/:id', (req,res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id != id)
    res.status(204).end()
})


app.post('/api/notes/:id', (req,res) => {
    const note = req.body
    
    if(!note || !note.nombre){
        return res.status(400).json({
            error: 'note.nombre is missing'
        })
    }

    const ids = notes.map(note => note.id)
    const maxId = math.max(ids)

    const newNote = {
        id: maxId + 1,
        nombre: note.nombre,
        important: typeof note.important != 'undefined' ? note.important :false
    }

    notes = [...notes, newNote]

    res.json(note)
})



const PORT = 3000
app.listen(3000, () => {
    console.log(`Server running on port ${PORT}...`)
})