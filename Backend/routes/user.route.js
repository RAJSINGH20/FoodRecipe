import express from 'express';
import { Register, Login, logout } from '../controller/user.controller.js';
const router = express.Router();

// Test Route
router.get('/test', (req, res) => {
    res.status(200).send('✅ API Working');
});


router.post('/register', Register);
router.post('/login', Login);
router.post('/logout', logout);
export default router;