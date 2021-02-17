const express = require('express');

const Treino = require('./controller/treino');

const routes = express.Router();

routes.get('/treino/:list', Treino.index);

routes.post('/treino', Treino.create);

routes.delete('/treino/:paras', Treino.delete);

module.exports = routes;