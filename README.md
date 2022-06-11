![download](https://user-images.githubusercontent.com/100974682/171773873-d48bfcdb-0921-45a4-8d7a-c31048ff0c78.png)
<h1 align="center">
    <br>
    <p align="center"># Turma Online 16 - Back-end |Reprograma - Semana 11 - API -REVISAO 🚀 <p> 
</h1>

# ⚠️ Dessa vez um servidor de jogos e series contém repositório com uma #APIRest em #JavaScript utilizando arquitetura #MVC e #nodejs para realizar um #CRUD completo, nele é possível: cadastrar, atualizar, deletar e retornar games e series , segue mais detalhes abaixo.

## Por onde começamos?


Minha estrutura de uma maneira geral:

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   └── index.js
├── server.js
├── package.json
```



### Postman

Essa ferramenta permite testar serviços RESTful por meio do envio de requisições HTTP e da análise do seu retorno. Você pode salvar todas as suas _collections_ e facilitar o seu dia-a-dia como pessoa desenvolvedora!

# 🧠Falando um pouquinho do contexto

## `Como foi criado o projeto` 
 <img src="https://user-images.githubusercontent.com/100974682/169424271-dfb902c0-90e2-409c-9331-5543258b7cae.jpg" alt="Gif Yeah" width="240">


## API GAMES

🎮 Retorna todos os jogos;

🎮 Retornar apenas um jogo Específico;

🎮 Cadastrar novo jogo;

🎮 Atualizar um jogo específico;

🎮 Deletar um jogo específico pelo id;

🎮 Atualizar se gostou ou não do jogo;

## Retornando no POSTMAN E NAS ROTAS

**[GET] /games**

**[GET] /games/:id**

**[POST] /games**

**[PUT] /games/:id**

**[DELETE] /games/:id**

**[PATCH] /games/:id/liked**

## API SERIES

📺 Retorna todas series;

📺 Retornar series de um gênero específico;

📺 Retornar apenas uma série específico;

📺 Cadastrar nova série;

📺 Deletar uma série específica;

📺 Atualizar se gostou ou não da série;

## Retornando no POSTMAN E NAS ROTAS

**[GET] /series**

**[GET] /series/genero**

**[GET] /series/:id**

**[POST] /series**

**[DELETE] /series/:id**

**[PATCH] /series/:id/liked**

Tentei realizar um desafio proposto que solicitava criar mais algumas rotas para trabalhar com essas temporadas e episódios das series:

Porém só fiz uma com ajuda da prof.ª caso alguém queira me ajudar a fazer esses códigos fique à vontade. Rsrs

Nossa API de séries contém várias temporadas e essas contém vários episódios.

O desafio proposto seria esse:  

🎥 Cadastrar novo episódio na temporada, onde :id é o id da e :seasonId é o id da temporada; ** esse já foi feito Retornando no Postman  [POST] /series/:id/season/:seasonId/episode
O que falta ser feito são essas abaixo:

🎥 Cadastrar nova temporada na série, onde o :id é o id da série;

🎥 Deletar uma temporada específica, onde :id é o id da série e :seasonId é o id da temporada;

🎥 Deletar um episódio específico na temporada, onde :id é o id da série, :seasonId é o id da temporada e:episodeId é o id do episódio;

🎥 Atualizar se o episódio foi assistido ou não, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio;

## Retornando no POSTMAN

[POST] /series/:id/season

[DELETE] /series/:id/season/:seasonId

[DELETE] /series/:id/season/:seasonId/episode/:episodeId

[PATCH] /series/:id/season/:seasonId/episode/:episodeId/watched

## Conclusão:


 <img src="https://user-images.githubusercontent.com/100974682/167975928-99cd4e0e-f853-4ee1-9490-2bf2c6425321.jpg" alt="Gif Yeah" width="400">
 
---
**# Segue minhas redes sociais, me add.**  :)

- [linkedin](https://www.linkedin.com/in/b%C3%A1rbara-gon%C3%A7alves-211b5691/)
- [github](https://github.com/idbabis) 
- E-mail: idbabis@gmail.com
---