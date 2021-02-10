
exports.up = function (knex) {
    return knex.schema.createTable('treino', function (table) {
        table.string('musculos').primary();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('treino');
};
