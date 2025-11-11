// const express = require('express')
// const app = express()
// app.use(express.json())
// let port = 8081
// app.listen(port, () => {
//     console.log("Servidor rodando na porta 8081")
// })

// app.get('/', (req, res) => {
//     res.send('Página index')
// })

const express = require('express');
const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    res.send('Página index');
});

app.get('/sobre', (req, res) => {
    res.send('Página sobre');
});

app.get('/contato', (req, res) => {
    res.send('Página contato');
});

let port = 8081;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


