const express = require('express');
const Tvshow = require('../models/tvshow');


const router = express.Router();



router.get('/', (req, res) => {
  Tvshow.find()
    .then(tvshows => res.json(tvshows))
    .catch(error => res.json({ error }))
});

router.post('/', (req, res) => {
  Tvshow.create(req.body)
    .then((tvshow) => {
      res.status(200).json(tvshow).end();
    })
    .catch(error => res.json({ error }))
});

module.exports = router;
