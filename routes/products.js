let os = require('os');
let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.send(`Product Service running on ${os.hostname()} (test2222)`);
});

router.get('/healthy', (req, res, next) => {
  res.status(200).json();
});

module.exports = router;
