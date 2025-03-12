const axios = require('axios')
const http = require('http')
const crypto = require('crypto')

//const url = "https://www.google.com.br/search?q=papagaio"

// configurando o objeto que irá utilizar o algoritmo de criptografia e o que será criptografado
const DADOS_CRIPTOGRAFAR={
    algoritmo: 'aes256',
    segredo: 'parametros',
    tipo: 'hex'
}

function criptografar(url){
    // separando os parametros da url
    const arrayDaURL = url.split('?')
    const parametros = arrayDaURL[1].toString()
    // criptografando os parametros da url
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo,DADOS_CRIPTOGRAFAR.segredo)
    cipher.update(parametros)

    return cipher.final(DADOS_CRIPTOGRAFAR.tipo)    
}

function descriptografar(url){
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo,DADOS_CRIPTOGRAFAR.segredo)
    decipher.update(url,DADOS_CRIPTOGRAFAR.tipo)
    return decipher.final()
}
console.log(descriptografar(criptografar("https://www.google.com.br/search?q=papagaio")))

//console.log(criptografar("https://www.google.com.br/search?q=papagaio"))