
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airlines').del()
    .then(function () {
      // Inserts seed entries
      return knex('airlines').insert([
        {airline_name: 'southwest', desc: "blah description", img: "www.google.com"}

      ]);
    });
};
