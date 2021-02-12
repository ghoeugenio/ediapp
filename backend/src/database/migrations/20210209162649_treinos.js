
exports.up = function (knex) {
    return knex.schema.createTable('treino', function (table) {
        table.increments('id');

        table.string('musculos').notNullable();
        table.string('exercicio').notNullable();
        table.string('info').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('treino');
};
