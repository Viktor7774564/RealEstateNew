const express = require("express");
const router = express.Router();

//LogIn page
router.get('/login', function(req, res, next){
    res.send('Login')
})

//Account page
router.get('/account', function(req, res, next){
    res.send('Account')
})

//Page with buy requests
router.get('/requests/buy', function(req, res, next){
    res.send('Buy Requests')
})

//Page with sell requests
router.get('/requests/sell', function(req, res, next){
    res.send('Sell Requests')
})

//Page with rent requests
router.get('/requests/rent', function(req, res, next){
    res.send('Rent requests')
})


//----------------------Их мб в один рут объединить------------------
//Modal window for canceling buy request
router.put('/requests/buy/cancel/:id', function(req, res, next){
    res.send('Cancelling buy request')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for canceling sell request
router.put('/requests/sell/cancel/:id', function(req, res, next){
    res.send('Cancelling sell request')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for canceling rent request
router.put('/requests/rent/cancel/:id', function(req, res, next){
    res.send('Cancelling rent request')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо
//-------------------------------------------------------------------

//Modal window for refuse request
router.put('/requests/refuse/:id', function(req, res, next){
    res.send('Refuse request')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Page with Employee's clients
router.get('/myClients', function(req, res, next){
    res.send('Clients')
})

//Information about client page
router.get('/myClients/clientInfo/:id', function(req, res, next){
    res.send('Client info')
})

//Page with active deals
router.get('/deals/activeDeals', function(req, res, next){
    res.send('Active Deals')
})

//Page with canceled deals
router.get('/deals/canceledDeals', function(req, res, next){
    res.send('Canceled Deals')
})

//Page with complete deals
router.get('/deals/completeDeals', function(req, res, next){
    res.send('Complete Deals')
})

//Modal Window for cancelling active deal
router.put('/deals/activeDeals/cancel/:id', function(req, res, next){
    res.send('Cancelling Active Deal')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal Window for complete active deal
router.put('/deals/activeDeals/complete/:id', function(req, res, next){
    res.send('Complete Active Deal')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Page with canceled deals
router.get('/deals/canceledDeals/resume/:id', function(req, res, next){
    res.send('Resume Deal')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Page with archiving real estate
router.get('/archive', function(req, res, next){
    res.send('All archive Real Estate')
})

module.exports = router;