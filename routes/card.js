import express from 'express'
const router = express.Router()

router.get('/') // get all cards

router.get('/:id') // get card by id

router.post('/') // create new card

router.delete('/:id') // delete card by id

router.put('/:id') // update card by id

router.get('/user/:id') // get all cards by user id



export default router