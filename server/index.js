const express = require('express')
const app = express()
const realEstateR = require('./routes/realestate')
const employeeR = require('./routes/employee')
const adminR = require('./routes/admin')
const directorR = require('./routes/director')

app.get('/main', (req, res) => {
    res.send('Main Page')
})

app.get('/blog', (req, res) => {
    res.send('Blog Page')
})

app.get('/team', (req, res) => {
    res.send('Real Estate team page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contacts', (req, res) => {
    res.send('Contacts Page')
})

app.use('/realEstate', realEstateR)
app.use('/employee', employeeR)
app.use('/admin', adminR)
app.use('/director', directorR)

let port = 3001
app.listen(port)