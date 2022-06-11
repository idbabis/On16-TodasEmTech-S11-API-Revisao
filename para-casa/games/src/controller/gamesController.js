const { response } = require('express')
const express = require('express')
const games = require('../models/games.json')

const getAllGames = (req, res) => {

    try {
        res.status(200).json([
            {
                'Games': games
            }
        ])
    } catch(err) {
        res.status(500).send({ message: 'err'})
    }
}


const getGamesById = (req, res) => {

    try {
        let idRequest = req.params.id
        let idFilter = games.filter(game => game.id == idRequest)

        if (idFilter.length > 0) {
            res.status(200).send(idFilter)
        } else {
            res.status(404).send({ message: 'Jogo não encontrado'})
        }
    } catch(err) {
        response.status(500).send({ message: 'err'})
    }

}

const postNewGame = (req, res) => {

    try {
        const postGame = { id, title, launchYear, consoles, liked } = req.body
        games.push({ id: games.length + 1, title, launchYear, consoles, liked})

        res.status(201).send({ message: 'Novo jogo adicionado', postGame})

    } catch(err) {
        res.status(500).send({ message: 'err'})
    }

}

const updateGameById = (req, res) => {

    try {

        const idRequest = req.params.id

        const gameRequest = req.body

        let foundIndex = games.findIndex(game => game.id == idRequest)

        games.splice(foundIndex, 1, gameRequest)

        res.status(200).send({ message: 'Jogo atualizado com sucesso', gameRequest})

    } catch(err) {
        res.status(500).send( {message: 'err'})
    }
}

const deleteGameById = (req, res) => {

    try {

        const idRequest = req.params.id

        const indexGame = games.findIndex(game => game.id == idRequest)

        games.splice(indexGame, 1)

        res.status(200).send({ message: 'Jogo excluído com sucesso', deleted: idRequest, games })

    } catch(err) {
        res.status(500).send({ message: 'err'})
    }

}

const updateLike = (req, res) => {

    const idRequest = req.params.id
    const likedRequest = req.body.liked

    const gameFound = games.find(game => game.id == idRequest)
    const gameIndex = games.indexOf(gameFound)

    if (gameIndex >= 0) {

        gameFound.liked = likedRequest
        games.splice(gameIndex, 1, gameFound)

        res.status(200).send({ message: 'Jogo que gostei', games })
        
    } else {

        res.status(500).send({ message: 'err' })
    }
}

    

module.exports = {
    getAllGames,
    getGamesById,
    postNewGame,
    updateGameById,
    deleteGameById,
    updateLike
}