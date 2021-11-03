const express = require("express");
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

router.get("/", function(req,res,next) {
    punkAPI.getBeers()
    .then((beers) => {res.render('beers', {beers})
    console.log(beers)})
    .catch(next)
})

module.exports = router