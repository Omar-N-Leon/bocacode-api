const functions = require('firebase-functions');

const firebase = require('firebase-admin')
const firebaseApp = firebase.initializeApp(functions.config().firebase)
const express = require('express')
const app = express()
const engines = require('consolidate')
const { getStudents, getStudentByName } =require('./src/students')

app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/students', getStudents )
app.get('/students/:name', getStudentByName)

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-max-age=600' )
    getCourses().then(courses => {
        res.render('index', {courses})
    })
})
app.get('/course.json', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-max-age=600')
    getCourses().then(courses => {
        res.json(courses)
    })
})

exports.app = functions.https.onRequest(app)
exports.getStudents = (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-max-age=600')
    res.send(students)
}

function getCourses() {
    const ref = firebaseApp.database().ref('courses')
    return ref.once('value').then(snap => snap.val())
}