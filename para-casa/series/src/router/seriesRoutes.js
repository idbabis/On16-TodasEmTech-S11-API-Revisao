const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

router.get('/all', controller.getAllSeries)
router.get('/genero', controller.getByGenero)
router.get('/:id', controller.getSeriesById)
router.post('/novo', controller.postNewSerie)
router.delete('/delete/:id', controller.deleteSerieById)
router.patch('/:id/liked', controller.updateLike)
router.post("/:id/season/:seasonId/episode", controller.addEpisode)


module.exports = router
