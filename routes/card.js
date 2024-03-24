import express from 'express'
const router = express.Router()
import { getCards, getCardByID, createCard, deleteCard, updateCard, getCardsByUser } from '../controllers/cardController.js'

router.get('/', getCards) // get all cards

router.get('/:id', getCardByID) // get card by id

router.post('/', createCard) // create new card

router.delete('/:id', deleteCard) // delete card by id

router.put('/:id', updateCard) // update card by id

router.get('/user/:id', getCardsByUser) // get all cards by user id

export default router