import express from 'express';
import { signUp, logIn, userDelete, getUsers, getUser } from '../controllers/user.js';
const router = express.Router();

// const checkAuth = require('../middleware/check-auth');

router.post('/register', signUp);
router.post('/login', logIn);
router.delete('/:userId', userDelete);
router.get('/', getUsers);
router.get('/:userId', getUser);
export default router;
