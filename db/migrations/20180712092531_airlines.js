exports.up = function(knex, Promise) {
  return knex.schema.createTable("airlines", function(table){
    table.increments();
    table.string("airline_name");
    table.string("desc");
    table.string("img");
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("airlines")
};
