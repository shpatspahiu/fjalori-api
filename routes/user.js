import express from 'express'
const router = express.Router()

router.get('/') // get all users

router.get('/:id') // get user by id

export default router