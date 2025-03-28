//Axios
const axios = require('axios')
const API_URL = 'http://localhost:91/usuarios'

//criar um livro
const createUser = async(usuario)=>{
    try{
        const response = await axios.post(API_URL,usuario)
    }catch(error){
        console.log(error)
    }
}
// ler todos os livros
const getUser = async()=>{
    try {
       const response = await.get(API_URL)
       console.log(response.data)
    }catch(error){
        console.log(error)
    }
}