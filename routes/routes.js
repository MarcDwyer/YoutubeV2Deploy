const router = require('express').Router();
const fs = require('fs');
const streamerList = require('../init/getstreams');


router.get('/all', (req, res) => {
  res.send(JSON.stringify(streamerList));
})
router.get('/live', (req, res) => {
    fs.readFile(`./fetches/activestreamers.json`, (err, data) => {
        res.send(data);
    })
})

module.exports = router;
