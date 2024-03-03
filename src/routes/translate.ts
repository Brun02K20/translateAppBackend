import * as deepl from 'deepl-node'
import express from 'express'
import { translate } from '../services/translate.service'
import { AUTO_LANGUAGE } from '../constants'
const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/translate/:f/:to/:text', async (req, res) => {
    const sourceLang: deepl.SourceLanguageCode | 'auto' = req.params.f as deepl.SourceLanguageCode | 'auto'
    const targetLang: deepl.TargetLanguageCode = req.params.to as deepl.TargetLanguageCode
    const text = req.params.text

    const sL = sourceLang === AUTO_LANGUAGE ? null : sourceLang

    translate({
        fromLanguage: sL,
        toLanguage: targetLang,
        text
    })
        .then(translation => {
            return res.json(translation)
        })
        .catch(error => {
            console.error('Error en la traducción:', error)
            return res.status(500).json({ error: 'Ocurrió un error durante la traducción.' })
        })
})

export default router
