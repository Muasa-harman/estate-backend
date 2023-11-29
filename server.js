import express from 'express'
import mongoose, { connect } from 'mongoose'
import 'dotenv/config'
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to mongodb')
}).catch((console.error
))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen( process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))