import express from 'express'
const router = express.Router();
import * as authController from '../controllers/authController.js'

router.post('/signup', authController.signup)
router.post('/signIn', authController.signIn)
router.post('/google', authController.google)

export default router;