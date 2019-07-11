
exports.up = function(knex) {
  return knex.schema.createTable('posts', posts => {
        posts
            .increments();
        posts
            .string('location', 233)
            .notNullable()
        posts
            .string('email', 155)
            .notNullable()
        posts
            .string('phone number', 15)
            .numeric()
            .unique();
    });
};

exports.down = function(knex) {
  return knex.scehma.dropTableIfExists('posts');
};
