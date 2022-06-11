const pets = require('../models/pets.json')
const fs = require('fs')

const postPet = (req, res) => {
  const { id, nomeFantasia, endereco, telefone, atende } = req.body
  pets.push({ id: pets.length + 1, nomeFantasia, endereco, telefone, atende })

  fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
    if (err) {
        res.status(500).send({ message: err })
    } else {
        console.log("Arquivo atualizado com sucesso!")
        const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets      
        res.status(200).send(petFound)
    }
})

res.status(200).send({ message: "SECESSOOOOOOOO, GRAÇAS"})
}


const updateName = (req, res) => {

    let idPetRequest = req.params.id
    let nomeFantasiaRequest = req.body.nomeFantasia

    const petFound = pets.find(pet => pet.id == idPetRequest) // encontrando o pet
    const petIndex = pets.indexOf(petFound) // identificando o indice do pet no meu array

    if (petIndex >= 0){
        petFound.nomeFantasia = nomeFantasiaRequest

        //encontrou o indice // remove um item (nome Fantasia) //adiciona um item
        pets.splice(petIndex, 1, petFound)

        fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { 
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Teu arquivo foi alterado");
                const petUpdate = pets.find(pet => pet.id == idPetRequest)
                res.status(200).send(petUpdate)
            }})

        } else {

            res.status(404).send({message: "Não encontramos esse petshop, cadastre agora"})

        }

}

const updatePet = (req, res) => {
    try {
        const petId = req.params.id
        const petToUpdate = req.body 

        const petFound = pets.find(pet => pet.id == petId) 
        const petIndex = pets.indexOf(petFound) 
        if (petIndex >= 0) { 
            pets.splice(petIndex, 1, petToUpdate) 

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("Arquivo atualizado!")
                    const petUpdated = pets.find(pet => pet.id == petId) 
                    res.status(200).send(petUpdated) 
                }
            })
        } else {
            res.status(404).send({ message: "Não foi possivel encontrar o Pet para atualizar" })
        }

    } catch (err) {
        res.status(500).send({ message: err })
    }
}

const deletePet = (req, res) => {
    try {
        const petId = req.params.id
        const petFound = pets.find(pet => pet.id == petId) // encontro o pet pelo id
        const petIndex = pets.indexOf(petFound) // identifico o índice do pet no meu array

        if (petIndex >= 0) { // verifico se o pet existe no array de pets
            pets.splice(petIndex, 1) // removo o pet pelo índice
            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {8
                    console.log("Pet deletado com sucesso!")
                    res.sendStatus(204)
                }
            })
        } else {
            res.status(404).send({ message: "Pet não encontrado" })
        }

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar o pet" })
    }
}

const getAllPets = (req, res) => {
    const animal = req.query.animal 
    const estado = req.query.estado.toLowerCase() 
    let allPets = pets
    if (animal) { 
        allPets = pets.filter(pet => pet.atende.includes(animal)) 
    }
    if (estado) {
        const petByEstado = pets.filter(pet => pet.endereco.toLowerCase().includes(estado)) 
        if (animal) { 
            allPets = petByEstado.filter(pet => allPets.includes(pet)) 
        } else {
            allPets = petByEstado
        }
    }
    res.status(200).send(allPets) 
}

const getPetByAtendimento = (req, res) => {
    let atendeRequest = req.query.atende
    console.log(atendeRequest)

    let petFound = pets.filter(pet => pet.atende.includes(atendeRequest))
   
    console.log(petFound)
    
    if (petFound.length > 0) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({ message: "Nao encontramos esse estabelecimento." })
    }
}


const getPet = (req, res) => {
    const petId = req.params.id
    const petFound = pets.find(pet => pet.id == petId)
    if (petFound) {
        res.status(200).send(petFound)
    } else {
        res.status(404).send({ message: "Pet não encontrado" })
    }
}
module.exports = {
    postPet,
    updateName,
    updatePet,
    deletePet,
    getAllPets,
    getPetByAtendimento,
    getPet,

    }

