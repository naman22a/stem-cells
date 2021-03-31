import express from 'express';
import { getBibliography } from '../controllers/bibliography';

const router = express.Router();

router.get('/', getBibliography);

export default router;