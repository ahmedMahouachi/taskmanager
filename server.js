const express = require('express')
const path = require('path')
const app = express();
const taskRouter = require('./src/routes')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use('/api', taskRouter)

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
})