const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { musculo } = request.params;

        const exercicio = await connection('treino')
            .where('musculos', musculo)
            .select('exercicio', 'info');

        return response.json(exercicio);
    },

    async create(request, response) {
        const { musculos, exercicio, info } = request.body;

        await connection('treino').insert({
            musculos,
            exercicio,
            info,
        })

        return response.json({ status: 'treino cadastrado' });
    },

    async delete(request, response) {

        const { exercicio } = request.params;

        await connection('treino')
            .where('exercicio', exercicio)
            .delete();

        return response.status(204).send();
    },

    async delmuscle(request, response) {

        const { musculo } = request.params;

        await connection('treino')
            .where('musculos', musculo)
            .delete();

        return response.status(204).send();
    }
}