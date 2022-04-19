const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello Form My Own Smarty Pant !!')
})

const users = [
    { id: 1, name: 'savana', email: 'savana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'savnur', email: 'savnur@gmail.com', phone: '0178888888' },
    { id: 3, name: 'bobita', email: 'bobita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'mousumi', email: 'mousumi@gmail.com', phone: '0178888888' },
    { id: 5, name: 'suchorita', email: 'suchorita@gmail.com', phone: '0178888888' },
    { id: 6, name: 'moumita', email: 'moumita@gmail.com', phone: '0178888888' },
    { id: 7, name: 'kobori', email: 'kobori@gmail.com', phone: '0178888888' },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.listen(port, () => {
    console.log('Listing To Port', port)
})