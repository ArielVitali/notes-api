const http = require('http')

let notes = [
    {
        "id":"1",
        "impotant":"true"
    },
    {
        "id":"2",
        "important":"false"
    },
    {
        "id":'3',
        "important":'false'
    }
]

const app = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(notes))
})

app.listen(3000)