import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

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

