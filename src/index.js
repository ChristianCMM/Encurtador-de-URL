const axios = require('axios')
const express = require('express')

const app = express()

let listaDeUrl = [{
    novaUrl:"https://www.google.com.br/search?q=papagaio"
}]

app.get('/lista',(request,response)=>{
    response.send(listaDeUrl)
})

app.listen(91,()=>{
    console.log('Servidor Online')
})

axios.get('http://localhost:91/lista')
    .then(res=>console.log(res))
    .catch(e=>console.log("error"))
    .finally()


// base para encriptar e decriptar a string
const string = 'Exemplo de string'
// encriptar
const base64 = btoa(string)

console.log(base64)
// decriptar
const novaString = atob(base64)

console.log(novaString)

//const urlInserida = "https://www.google.com.br/search?q=papagaio"
//https://apidog.com/pt/blog/nodejs-express-axios/