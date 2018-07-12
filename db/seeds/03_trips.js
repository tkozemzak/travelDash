
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {trip_name: 'graduation', date: "7/20/18", to: "LAX", from: "PHX", airline_id: 1, user_id: 1}
        
      ]);
    });
};
