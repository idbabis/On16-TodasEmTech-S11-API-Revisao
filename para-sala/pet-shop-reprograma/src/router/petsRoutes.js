const express = require('express')

const router = express.Router()

const controller = require('../controller/petsController')

router.post('/adicionar', controller.postPet)
router.patch('/name/:id', controller.updateName)
router.put('/atualizar/:id', controller.updatePet)
router.delete('/deletar/:id', controller.deletePet)
router.get('/tudo', controller.getAllPets)
router.get('/atende', controller.getPetByAtendimento)
router.get('/:id', controller.getPet)


module.exports = router;

