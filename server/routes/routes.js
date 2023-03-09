const express = require('express');
const router = express.Router();
const signUpSchema = require('../models/signupmodel')

router.post('/signup', (req, res) => {

 const signUpedUser = new signUpSchema({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
 })
 signUpedUser.save()
 .then(data => {
    res.json(data)
 })
 .catch(error => {
    res.json(error)
 })
})

module.exports = router