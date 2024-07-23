const express = require("express");
const router = express.Router();

//Page for viewing agent statistics
router.get('/employees/statistics', function(req, res, next){
    res.send('Agent statistics')
})

module.exports = router;