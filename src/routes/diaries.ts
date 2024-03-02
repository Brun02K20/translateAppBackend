import express from 'express'
const router = express.Router()

router.get('/', (_req, res) => {
    res.send('get')
})

router.post('/', (_req, res) => {
    res.send('post')
})

export default router
