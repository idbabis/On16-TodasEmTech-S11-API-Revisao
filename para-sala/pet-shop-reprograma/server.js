const app = require('./src/app')

const PORT = 1313;

app.listen(PORT,() => {
    console.log(`Servidor esta rodando na porta ${PORT}`)
})

