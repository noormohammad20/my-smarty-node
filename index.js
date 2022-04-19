const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello Form My Own Smarty Pant !!')
})

app.listen(port, () => {
    console.log('Listing To Port', port)
})