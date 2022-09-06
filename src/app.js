import express from 'express'

const app = express()

app.use(express.json()); //para o express ler JSON


app.listen(3333, () => console.log('servidor funcionando'))