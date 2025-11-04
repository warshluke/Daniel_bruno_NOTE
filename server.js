const express = require('express');
const app=express()

//rota principal
app.get('/',(req,res) => {
    res.send('Olá mundo')
});

//rota 2
app.get('/sobre',(req,res) => {
    res.send('Esta é a rota sobre o sistema')
});


//rota 3
app.get('/usuarios',(req,res) => {
    res.json([
    {id: 1, nome: 'Daniel'},
    {id: 2, nome: 'Carolina'}    
]);
});

//inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodado em http://localhost:3000')
});