const express = require('express');
const app=express()

//rota principal
app.get('/',(req,res) => {
    res.send('Olá mundo')
});

//inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodado em http://localhost:3000')
})