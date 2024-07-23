const express = require("express");
const router = express.Router();

router.get('/allRealEst', function(req, res, next){
    res.send('All Real Estate')
})

router.get('/residental', function(req, res, next){
    res.send('Residental Real Estate')
})

router.get('/commercial', function(req, res, next){
    res.send('Commercial Real Estate')
})

router.get('/agricultural', function(req, res, next){
    res.send('Agricultural Real Estate')
})

//Не смотри пока на них, т.к. я пока не знаю, как вообще к ним обращаться правильно
//Ну или если поскажешь, то я исправлю

//------------------------Начало рутов с ?????----------------------------------
router.get('/info/:id', function(req, res, next){
    res.send('Info Real Estate')
}) //Не знаю пока, как к id обратиться, также и в остальных

router.put('/editRealEstate/:id', function(req, res, next){
    res.send('Edit Real Estate')
}) //Вопрос следующий: как лучше поступить? Сделать отд. страницу изменения или модалку?
//И также вопрос по расположению, как у добавления

router.post('/addRealEst', function(req, res, next){
    res.send('Adding Real Estate')
}) //Не знаю, где правильнее располагать его: здесь или в employee.js

router.put('/archive/:id', function(req, res, next){
    res.send('Archiving Real Estate')
}) //Не знаю, где правильнее располагать его: здесь или в employee.js

router.put('/delFromArchive/:id', function(req, res, next){
    res.send('Delete from archive Real Estate')
}) //Не знаю, где правильнее располагать его: здесь или в employee.js

router.delete('/editRealEstate/:id/delPhoto/:(название файла)', function(req, res, next){
    res.send('Delete Real Estate photo')
}) //А вот здесь тоже не оч знаю с расположением, как правильно этот route написать и как правильно оформить удаление со стороны работника
//(могу потом пояснение дать, если непонятно)

router.get('/deal', function(req, res, next){
    res.send('Deal page')
})

router.post('/deal/createDeal', function(req, res, next){
    res.send('Create deal process')
})
//По этим двум рутам вопрос тоже с расположением, но скорее всего они будут помещены в employee, а там со стороны работника посмотрю, как это реализовать

//------------------------Конец рутов под вопросом------------------------------

module.exports = router;



