const express = require('express');
const router = express.Router();
const db = require('../db/connection'); // à venir à l'étape suivante

// POST /submit – Traitement du formulaire
router.post('/submit', async (req, res) => {
  const { name, email } = req.body;
  try {
    await db.insertSubmission(name, email);
    res.redirect('/submissions');
  } catch (error) {
    res.status(500).send('Erreur lors de l’enregistrement.');
  }
});

// GET /submissions – Affichage des données
router.get('/submissions', async (req, res) => {
  try {
    const submissions = await db.getAllSubmissions();
    res.send(submissions);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des données.');
  }
});

module.exports = router;
