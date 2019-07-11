
exports.up = function (knex) {
    return knex.schema.createTable('prochef', prochef => {
        prochef.increments();
        prochef
            .string('title', 200)
            .notNullable();
        prochef
            .string('meal type', 255)
            .nutNullable();
        prochef
            .string('ingredients', 255)
            .notNullable();
        prochef
            .string('instructions', 500)
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('prochef');
};
