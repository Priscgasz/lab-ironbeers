const express = require("express");
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

router.get("/", function(req,res,next) {
    punkAPI.getRandom()
    .then((beers) => {res.render('random-beers', {beers})})
    .catch(next)
})

module.exports = router