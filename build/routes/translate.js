"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const translate_service_1 = require("../services/translate.service");
const constants_1 = require("../constants");
const router = express_1.default.Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/translate/:f/:to/:text', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sourceLang = req.params.f;
    const targetLang = req.params.to;
    const text = req.params.text;
    const sL = sourceLang === constants_1.AUTO_LANGUAGE ? null : sourceLang;
    (0, translate_service_1.translate)({
        fromLanguage: sL,
        toLanguage: targetLang,
        text
    })
        .then(translation => {
        return res.json(translation);
    })
        .catch(error => {
        console.error('Error en la traducción:', error);
        return res.status(500).json({ error: 'Ocurrió un error durante la traducción.' });
    });
}));
exports.default = router;
