const express = require('express');
const router = express.Router();

const ClenTymu = require('../../models/ClenTymu');

// Getting all
router.get('/', (req, res) => {
  ClenTymu.find()
    .sort({ date: -1 })
    .then((aktuality) => res.json(aktuality));
});

// Getting One
router.get('/:id', (req, res) => {
  ClenTymu.findById(req.params.id)
    .then((aktualita) => res.json(aktualita))
    .catch((err) => res.status(404).json({ success: false }));
});

// Creating one
router.post('/', (req, res) => {
  ClenTymu.find().then((aktuality) => {
    const newAktualita = new ClenTymu({
      name: req.body.name,
      text: req.body.text,
      image: req.body.image,
      id: aktuality.length,
    });
    newAktualita.save().then((aktualita) => {
      res.json(aktualita);
    });
  });
});

// Updating One
router.put('/:id', (req, res) => {
  ClenTymu.findById(req.params.id)
    .then((aktualita) => {
      const updAktualita = req.body;
      aktualita.name = updAktualita.name ? updAktualita.name : aktualita.name;
      aktualita.text = updAktualita.text ? updAktualita.text : aktualita.text;
      aktualita.image = updAktualita.image
        ? updAktualita.image
        : aktualita.image;
      aktualita.save();
      res.json({ msg: 'Úspěšně aktualizováno', aktualita });
    })
    .catch((err) => res.status(404).json({ success: false }));
});

// Deleting One
router.delete('/:id', (req, res) => {
  ClenTymu.findById(req.params.id)
    .then((aktualita) =>
      aktualita.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
