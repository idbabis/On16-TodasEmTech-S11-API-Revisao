const series = require('../models/series.json')

const getAllSeries = (req, res) => {

    try {
        res.status(200).send({'Series:': series})

    } catch(err) {
        res.status(500).send({ message: 'error'})
    }
}

const getByGenero = (req, res) => {

    try {

        const generoRequest = req.query.genero.toLowerCase()

        let generoFilter = series.filter(serie => serie.genero.toLowerCase().includes(generoRequest))

        if (generoFilter.length > 0) {
            
            res.status(200).send(generoFilter)

        } else {

            res.status(404).send({message: 'Não encontrado'})
        }

    } catch(err) {
        res.status(500).send({ message: 'error'})
    }
}

const getSeriesById = (req, res) => {

    try {

        const idRequest = req.params.id

        const idFilter = series.filter(series => series.id == idRequest)

        if (idFilter.length > 0) {

            res.status(200).send(idFilter)

        } else {

            res.status(404).send({ message: 'Não encontrado'})
        }
 
    } catch(err) {

        res.status(500).send({ message: 'error'})
    }



}

const postNewSerie = (req, res) => {

    try {
        const postSerie = { id, name, genre, synopsiss, liked,} = req.body
        series.push({ id: series.length + 1, name, genre, synopsis, liked})

        res.status(201).send({ message: 'Nova serie adicionada', postSerie})

    } catch(err) {
        res.status(500).send({ message: 'err'})
    }

}

const deleteSerieById = (req, res) => {

    try {

        const idRequest = req.params.id

        const indexSerie = series.findIndex(serie => serie.id == idRequest)

        series.splice(indexSerie, 1)

        res.status(200).send({ message: 'Serie excluída com sucesso', deleted: idRequest, series })

    } catch(err) {
        res.status(500).send({ message: 'err'})
    }

}

const updateLike = (req, res) => {

    const idRequest = req.params.id
    const likedRequest = req.body.liked

    const serieFound = series.find(serie => serie.id == idRequest)
    const serieIndex = series.indexOf(serieFound)

    if (serieIndex >= 0) {

        serieFound.liked = likedRequest
        serie.splice(serieIndex, 1, serieFound)

        res.status(200).send({ message: 'Serie que gostei', series })
        
    } else {

        res.status(500).send({ message: 'err' })
    }
}

const addEpisode = (req, res) => {
    try {
      const serieId = req.params.id // guardar o id passado na request
      const serieToUpdate = series.find((serie) => serie.id == serieId) // procurar no array esse id que foi passado
  
      // verifique se a serie existe
      if (serieToUpdate) {
        const seasonId = req.params.seasonId //guarda o id da serie q a gata passou no request
        const seasonToUpdate = serieToUpdate.seasons.find(
          (season) => season.id == seasonId,
        ) // procura esse id no array de seasons no id de series informado
        // verificando se a temporada existe no array de series
        if (seasonToUpdate) {
          const { code, name, watched } = req.body
          seasonToUpdate.episodes.push({
            id: seasonToUpdate.episodes.length + 1,
            code,
            name,
            watched,
          }) // adicionamos o novo episodio a temporada
  
          console.log('FUNCIONOUUUUU')
  
          const serieUpdated = series.find((serie) => serie.id == serieId)
          res.status(201).send(serieUpdated)
        } else {
          res.status(404).send({ message: 'encontrei essa temporada nao visse' })
        }
      } else {
        res.status(404).send({ message: 'encontrei essa serie nao visse' })
      }
    } catch (err) {
      res.status(500).send({ message: 'ainda ta dando erro gataannn e eh do teu lado' })
    }
  }
  
module.exports = {
    getAllSeries,
    getByGenero,
    getSeriesById,
    postNewSerie,
    deleteSerieById,
    updateLike,
    addEpisode
}