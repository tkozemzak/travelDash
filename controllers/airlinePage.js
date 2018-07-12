const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("users").where('email', req.session.user.email).then((results)=>{
      knex("trips").where('airline_id', req.params.id).andWhere('trips.user_id', req.session.user.id).join("airlines", "airlines.id", "trips.airline_id" ).select("trips.*", "airlines.*", "trips.id AS trip_id").then((tripResults)=>{
        console.log(tripResults.length)
          res.render("airlinePage", {trips: tripResults});
      })


    })
  },


}
