const express = require('express');
const router = express.Router();
const classes = require('../services/classes');


router.get('/query/classesdetail', async function(req, res, next) {
  try {
    res.json(await classes.getClassesDetail());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.get('/query/linkedclasses', async function(req, res, next) {
    try {
      res.json(await classes.getLinkedClasses());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

module.exports = router;