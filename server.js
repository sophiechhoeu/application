
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}


const app = require('./app');
const port = 7000;
app.listen(port, () => {
  console.log(`TVSHOW API Server running on ${port}`);
});

app.use(function(req, res) {
  res.status(400).send({'error':'Could not decode request: JSON parsing failed'})
});
