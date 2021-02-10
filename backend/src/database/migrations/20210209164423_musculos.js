
exports.up = function (knex) {
    return knex.schema.createTable('musculos', function (table) {

        table.boolean('flag');

        table.string('musculo').notNullable();
        table.string('exercicio').notNullable();
        table.string('info_exercicio').notNullable();

        table.foreign('musculo').references('musculos').inTable('treino');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('musculos');
};
