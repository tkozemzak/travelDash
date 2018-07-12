const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("trips").where("id", req.params.id).then((results)=>{
      res.render("editPage", {trips: results})

    })
  },
  edit: function(req, res) {
    knex("trips").where("id", req.params.id).update({
      trip_name: req.body.trip_name,
      date: req.body.date,
      to: req.body.to,
      from: req.body.from
    }).then(()=>{
      res.redirect("/welcomePage")
    })
  },

}
