const express = require('express')
const app = express()
const realEstateR = require('./routes/realestate')
const employeeR = require('./routes/employee')
const adminR = require('./routes/admin')
const directorR = require('./routes/director')

app.use('/realEstate', realEstateR)
app.use('/employee', employeeR)
app.use('/admin', adminR)
app.use('/director', directorR)

let port = 3001
app.listen(port)