
const express = require('express')

const porta = 91

const app = express()

app.listen(porta,()=>{
    console.log(`Servidor aberto na porta ${porta}`)
})

let usuarios = []

// criando usuário
app.post('/usuarios',(req,res)=>{
    const usuario = req.body
    usuarios.push(usuario)
    res.status(201).send('Usuário adicionado com sucesso')
})

//lendo usuário
app.get('/usuarios',(req,res)=>{
    res.json(usuarios)
})

//atualizar um usuario
app.put('/usuarios/:id',(req,res)=>{
    const userId = req.params.id
    const updateUser = req.body
    usuarios = usuarios.map(user => user.id === userId ? updateUser : user)
    res.send('usuario atualizado com sucesso!')
})
// deletar usuário
app.delete('/usuarios/:id',(req,res)=>{
    const userId = req.params.id
    usuarios = usuarios.filter(user => user.id !== userId)
    res.send('Usuario deletado com sucesso')
})

