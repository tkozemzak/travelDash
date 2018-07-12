const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("users").where('email', req.session.user.email).then((results)=>{

      knex("trips").where('user_id', req.session.user.id).join("airlines", "airlines.id", "trips.airline_id" ).select("trips.*", "airlines.*", "trips.id AS trip_id").then((tripResults)=>{



          res.render("welcomePage", {user:results[0], trips: tripResults});


      })


    })
  },



}
