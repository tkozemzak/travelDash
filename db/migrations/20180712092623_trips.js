
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips", function(table){
    table.increments();
    table.string("trip_name");
    table.date("date")
    table.string("to");
    table.string("from");
    table.integer("airline_id")
      .references("id")
      .inTable("airlines")
      .onDelete("CASCADE")
      .index();
    table.integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .index();
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users")
};
