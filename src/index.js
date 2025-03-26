const axios = require('axios').default
const express = require('express')

const app = express()

const urlInserida = new Object({
    url:"https://www.google.com.br/search?q=papagaio"
})

app.listen(8080,()=>{
    console.log('Servidor Online')
})

app.get('/',(response)=>{
    response.send(urlInserida)
})


// base para encriptar e decriptar a string
const string = 'Exemplo de string'
// encriptar
const base64 = btoa(string)

console.log(base64)
// decriptar
const novaString = atob(base64)

console.log(novaString)

//const urlInserida = "https://www.google.com.br/search?q=papagaio"