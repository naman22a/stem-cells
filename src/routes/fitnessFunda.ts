import express from 'express';
import { getFitnessFunda } from '../controllers/fitnessFunda';

const router = express.Router();

router.get('/', getFitnessFunda);

export default router;