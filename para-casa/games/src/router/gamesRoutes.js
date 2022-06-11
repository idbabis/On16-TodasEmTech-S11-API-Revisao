const express = require('express')

const router = express.Router()

const controller = require('../controller/gamesController')

router.get('/all', controller.getAllGames)
router.get('/:id', controller.getGamesById)
router.post('/novo', controller.postNewGame)
router.put('/update/:id', controller.updateGameById)
router.delete('/delete/:id', controller.deleteGameById)
router.patch('/:id/liked', controller.updateLike)

module.exports = router

