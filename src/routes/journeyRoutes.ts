import express from 'express';
import { getJourneyData } from '../controllers/journeyController';

const router = express.Router();

router.route('/').post(getJourneyData);

export default router;
