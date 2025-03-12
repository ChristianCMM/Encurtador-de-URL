const porta = 8080
const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const res = axios({
    method: 'get',
    url: url,
    params:{
        _limit: 5
    }
}).then(console.log)