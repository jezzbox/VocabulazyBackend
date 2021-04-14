import express from 'express'
import { getVocabulary } from '../controllers/vocabulary.js'

const router = express.Router();

router.get('/', getVocabulary);

export default router;