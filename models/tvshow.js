const mongoose = require('./base');
const Schema = mongoose.Schema;

const tvshowSchema = Schema({
  image: String,
  slug: String,
  title: String,
});

const Tvshow = mongoose.models.Tvshow || mongoose.model('Tvshow', tvshowSchema);

module.exports = Tvshow 
