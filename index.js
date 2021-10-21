// const { query } = require('express');
const express = require('express')
const cors = require('cors');

const app =express()
app.use(cors())
app.use(express.json())

const port = 5000;


app.get('/', (req, res)=> {
    res.send('WOW i am Excited to learn Node and express with nodmon.automatic restart')
})
const users =[
    {id : 0, name:'Sabana', email:'sabana@gmail.com', phone:'0178888888'},
    {id : 1, name:'Sabnor', email:'Sabnor@gmail.com', phone:'0178888888'},
    {id : 2, name:'Shrbonti', email:'Shrbonti@gmail.com', phone:'0178888888'},
    {id : 3, name:'Suchirata', email:'Suchirata@gmail.com', phone:'0178888888'},
    {id : 4, name:'Soniya', email:'Soniya@gmail.com', phone:'0178888888'},
    {id : 5, name:'Susmita', email:'Susmita@gmail.com', phone:'0178888888'},
    ]

app.get('/users', (req, res) => {
    const search = req.query.search
    // use quary parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }else{
        res.send(users)
    }
    
})

// app.method
app.post('/users', (req, res)=> {
    const newUser= req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the post ', req.body)
    // res.send('inside post ')
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id =req.params.id
    const user = users[id]
    res.send(user)
    
})

app.get('/fruits', (req, res)=> {
    res.send(['mango','oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req , res) => {
    res.send('Yummy Yummy tok marka fazli')
})



app.listen(port, () => {
    console.log('Listening to port', port)
})