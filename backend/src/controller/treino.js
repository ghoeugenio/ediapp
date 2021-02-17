const connection = require('../database/connection');

const presave_muscles = [
    'peito',
    'costas',
    'ombro',
    'trapezio',
    'abdomem',
    'biceps',
    'triceps',
    'antebraco',
    'quadriceps',
    'posterior',
    'panturrilha',
];

var i;

module.exports = {

    async index(request, response) {
        const { list } = request.params;

        if (list == 'treino') {
            const treino = await connection('treino').select('musculos', 'exercicio', 'info');

            return response.json(treino);
        }

        const exercicio = await connection('treino')
            .where('musculos', list)
            .select('exercicio', 'info');

        return response.json(exercicio);
    },

    async create(request, response) {
        const { musculos, exercicio, info } = request.body;

        for (i = 0; i < 11; i++) {

            if (exercicio == presave_muscles[i]) {

                return response.json({ status: 'insira um exercicio valido' })
            }
        }

        await connection('treino').insert({
            musculos,
            exercicio,
            info,
        })

        return response.json({ status: 'treino cadastrado' });
    },

    async delete(request, response) {

        const { paras } = request.params;

        if (paras == 'treino') {
            await connection('treino').delete();

            return response.json({ status: 'ficha deletada' });
        }
        for (i = 0; i < 11; i++) {

            if (paras == presave_muscles[i]) {

                await connection('treino')
                    .where('musculos', paras)
                    .delete();

                return response.json({ status: 'musculo deletado' });
            }
        }

        await connection('treino')
            .where('exercicio', paras)
            .delete();

        return response.json({ status: 'exercicio deletado' });
    },
}