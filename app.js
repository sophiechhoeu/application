const express = require('express');
const bodyParser = require('body-parser');
const Tvshow = require('./models/tvshow');


// Create the app
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Tvshows router/controller
const tvshowsRouter = require('./routes/tvshows');
app.use('/tvshows', tvshowsRouter);


app.get('/', (req, res) => {
  Tvshow.find()
    .then(tvshows => res.json(tvshows))
    .catch(error => res.json({ error }))
});

app.post('/',(req,res) => {
  Tvshow.create(req.body)
    .then((tvshow) => {
      res.status(200).json(tvshow).end();
    })
    .catch(error => res.json({ error }))
});

module.exports = app
