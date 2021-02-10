const express = require('express');

const Treino = require('./controller/treino');

const routes = express.Router();

routes.get('/treino', Treino.index);

routes.post('/treino', Treino.create);

module.exports = routes;