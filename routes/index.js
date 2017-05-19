const express = require('express');
const router = express.Router();
const con = require('../content.json');

router.get('/', function(req, res) {
  let obj = {};
  Object.assign(obj, {content: con})
  res.render('pages/views/index', obj);
});


module.exports = router;
