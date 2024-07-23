const express = require("express");
const router = express.Router();

//Modal window for managing agents
router.get('/agents', function(req, res, next){
    res.send('Manage agents')
})

//Modal window for managing clients
router.get('/clients', function(req, res, next){
    res.send('Manage clients')
})

//Modal window for edit information about agent
router.put('/agents/edit/:id', function(req, res, next){
    res.send('Edit agent')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for edit information about client
router.put('/clients/edit/:id', function(req, res, next){
    res.send('Edit client')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for create new agent's account
router.put('/agents/newAgent', function(req, res, next){
    res.send('New Agent')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for block agent
router.put('/agents/block/:id', function(req, res, next){
    res.send('Block agent')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for block client
router.put('/clients/block/:id', function(req, res, next){
    res.send('Block client')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for unblock agent
router.put('/agents/unblock/:id', function(req, res, next){
    res.send('Unblock agent')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

//Modal window for unblock client
router.put('/clients/unblock/:id', function(req, res, next){
    res.send('Unblock client')
}) //Я думаю, что надо будет добавить get еще, так как открывать модалку как-то надо

module.exports = router;