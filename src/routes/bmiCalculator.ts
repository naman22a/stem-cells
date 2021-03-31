import express from 'express';
import { getBmiCalculator } from '../controllers/bmiCalculator';

const router = express.Router();

router.get('/', getBmiCalculator);

export default router;