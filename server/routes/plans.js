import express from 'express';
import { getPlans, createPlans, deletePlans, getPlan } from '../controllers/plan.js';
const router = express.Router();

router.get('/user/:userId', getPlans);
router.post('/user/:id', createPlans);
router.delete('/user/:id', deletePlans);
router.get('/:planId', getPlan);
export default router;
