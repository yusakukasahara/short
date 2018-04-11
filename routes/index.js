const express = require('express');
const router = express.Router();
const path = require('path');
const VIEWS_DIR = path.resolve(__dirname, '../client/public/views');

router.get('/', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, '/index.html'))
})

module.exports = router;