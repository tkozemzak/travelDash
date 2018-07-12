const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("main");
  },

  login: function(req, res){
    knex('users').where('email', req.body.email).then((results)=>{
      let user = results[0];
      if(user.password === req.body.password){
        req.session.user = user;

        res.redirect("/welcomePage");
      } else {
        res.redirect("/");
      }
    })
  },
  register: function(req, res){
    knex('users').insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(()=>{
      res.redirect('/')
    })
  },
}
