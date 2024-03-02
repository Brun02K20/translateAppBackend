import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

dotenv.config()

app.get('/ping', (_req, res) => {
    console.log('aaaaa')
    res.send('pongsex')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log('funca')
})
