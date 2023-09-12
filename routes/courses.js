const express = require('express');
const router = express.Router();
const courses = require('../services/courses');


router.get('/query/linkedclassescourses', async function(req, res, next) {
  try {
    res.json(await courses.getLinkedClassesCourses());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;