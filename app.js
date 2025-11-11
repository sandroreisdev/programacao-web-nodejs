const express = require('express');
const app = express();

app.use(express.json());

let array = [
    {nome: "Sandro", idade:52},
    {nome: "Pedro", idade:48},
    {nome: "Flávio", idade:46}
]

// array.push({nome:"Rosana", idade:45})

app.post('/cadastro', (req,res) => {
    const novoDado = req.body
    array.push(novoDado)
    res.send("usuário cadastrado com sucesso")
})

app.get('/', (req, res) => { // criando um end point
    res.send(array);
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


