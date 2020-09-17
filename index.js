// import express from 'express' / other way of importing usually in REACT
const express = require('express') // importing express library
const { getStudents } = require('./src/students')
const { getStudentByName } = require('./src/students')
const app = express() // creating an express server called "app"
const port = 3000

app.get('/', (req, res) => res.send('Hello World!')) // defining the type of requests we're allowing (get request and post request)
// can add something like app.get('/courses', (req, res) => res.send("!")) to create a page in your site www.google.com/courses for example
app.get('/courses/:courseName', (req, res) => {
    // let courseName = req.params.courseName //beginner way of writing it
    let { courseName } = req.params; //preferred way of writing you read it like "to get coursename from req.params"
    res.send ('Here is our ' + courseName + 'course')
})
app.get('/students', (req, res) => getStudents) //app.get('/students', getStudents) is the better way to write it
app.get('/students/:name', getStudentByName)
app.listen(port, () => console.log(`Listening at http://localhost:${port}`)) // to let us know that once its listening 