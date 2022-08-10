const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
//Create a user using : POST "/api/auth/createuser". dosent require authentication

router.post('/createuser', [
    body('email').isEmail,
    body('name').isLength({min:5}),
    body('password').isLength({min:8}),
], async(req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "sorry a user already exist"});
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    
    // .then(user => res.json(user))
    // .catch(err => console.log(err));
    // res.json({error: 'Please enter a unique vlue for emailID.', Message: err.Message})
    res.json({"Nice": "nice"})
})



module.exports = router ;