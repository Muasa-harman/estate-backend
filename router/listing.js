import express, { Router } from 'express'
const router = express.Router();
import * as listingController from '../controllers/listingController.js'
import { verifyToken } from '../utils/verifyUser.js';

router.post('/create',verifyToken, listingController.createListing)
// router.delete('/delete/:id', verifyToken, userController.deleteUser)

export default router;