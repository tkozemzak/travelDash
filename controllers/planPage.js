const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('airlines').then(function(results){
    res.render("planPage", {airlines: results})
    console.log(results)
  })
},
  addTrip: function(req, res) {
    knex('trips').insert({
      trip_name: req.body.trip_name,
      date: req.body.date,
      to: req.body.from,
      from: req.body.to,
      airline_id: req.body.airline_id,
      user_id: req.session.user.id

    }).then(function(){
      res.redirect('/welcomePage')
    })
  },
}
