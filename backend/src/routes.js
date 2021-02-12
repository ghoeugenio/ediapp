const express = require('express');

const Treino = require('./controller/treino');

const routes = express.Router();

routes.get('/treino/:musculo', Treino.index);

routes.post('/treino', Treino.create);

routes.delete('/treino/:exercicio', Treino.delete);

routes.delete('/treino/:musculo', Treino.delmuscle);

module.exports = routes;