//Update the name of the controller below and rename the file.
const main = require("../controllers/main.js");
const welcomePage = require("../controllers/welcomePage.js");

const editPage = require("../controllers/editPage.js")

const planPage = require("../controllers/planPage.js")

const airlinePage = require("../controllers/airlinePage.js")

module.exports = function(app){

//main
  app.get('/', main.index);
  app.post('/login', main.login);
  app.post('/register', main.register);

//welcome
  app.get('/welcomePage', welcomePage.index);

//plan
  app.get('/planPage', planPage.index);
  app.post('/planPage', planPage.addTrip);

  //edit
  app.get('/editPage/:id', editPage.index);
  app.post('/editPage', editPage.edit)

//airlinePage
  app.get('/airlinePage/:id', airlinePage.index)

}
