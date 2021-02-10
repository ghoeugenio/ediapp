const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const exercicio = request.body;

        const musculo = await connection('treino').select(exercicio);

        return response.json(musculo);
    },

    async create(request, response) {
        const { musculos } = request.body;

        await connection('treino').insert({
            musculos,
        })

        return response.json({ musculos });
    }
}