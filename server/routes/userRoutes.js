import express from 'express'
import { clerkWebhooks } from '../controllers/userController.js'



const userRouter = express.Router()

console.log('userRouter is connected')
userRouter.post('/webhooks', clerkWebhooks)


export default userRouter