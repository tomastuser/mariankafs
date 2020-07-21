const express = require('express');
const router = express.Router();
const path = require('path');

// Getting all
router.use('/', express.static('public'));

router.get('/aktuality', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/aktuality.html'));
});

router.get('/tym', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/tym.html'));
});

router.get('/stranky', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/stranky.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = router;
