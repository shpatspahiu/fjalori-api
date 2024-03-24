import express from 'express'
const router = express.Router()
import { loginUser, registerUser, confirmRegister } from '../controllers/authController.js'

router.post('/email/login', loginUser)
router.post('/email/register', registerUser)
router.post('/email/confirm', confirmRegister)

export default router