import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import cardRouter from './routes/card.js'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'

dotenv.config()
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/card', cardRouter)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection to mongoDB successful")
  })
  .catch((err) => {
    console.error(err)
  })

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`)
})

