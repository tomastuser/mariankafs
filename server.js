require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/marianka',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const aktuality = require('./routes/api/aktuality');
app.use('/api/aktuality', aktuality);

const tym = require('./routes/api/tym');
app.use('/api/tym', tym);

const stranky = require('./routes/api/stranky');
app.use('/api/stranky', stranky);

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));

module.exports = app;
