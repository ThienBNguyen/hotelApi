import express from 'express';
import { logIn, userDelete, getUsers, getUser, register, verifyUserEmail } from '../controllers/user.js';

const router = express.Router();

// const checkAuth = require('../middleware/check-auth');

router.post('/register', register);
router.post('/login', logIn);
router.delete('/:userId', userDelete);
router.get('/', getUsers);
router.get('/verifyemail/:email', verifyUserEmail);
router.get('/:userId', getUser);
export default router;
