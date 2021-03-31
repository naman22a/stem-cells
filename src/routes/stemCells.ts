import express from 'express';
import { getStemCells } from '../controllers/stemCells';

const router = express.Router();

router.get('/', getStemCells);

export default router;