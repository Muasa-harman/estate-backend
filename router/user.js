import express, { Router } from 'express'
const router = express.Router();
import * as userController from '../controllers/userController.js'
import { verifyToken } from '../utils/verifyUser.js';

router.post('/update/:id',verifyToken, userController.updateUser)
router.delete('/delete/:id', verifyToken, userController.deleteUser)

export default router;