const express = require ('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

//get API listing
router.get('/', (req, res) => {
    res.send('API works like butter!!!')
});

//New Register
router.post('/app-register', (req, res, next) => {

    let newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        state: req.body.state,
    });
        //console.log('req.body', req.body)

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg:
                'Failed to register user'});
        } else {
            res.json({success: true, msg: 'Thank you for registering with Merits'});
        }
    });
});

//Authentication with Passport
router.post('/app-authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:user},
                config.secret, {expiresIn: 86400});

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'})};
            }
        );
    });
});

//Profile 
router.get('/app-profile',  passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

//Search Results Page

router.post('/app-search-results', (req, res, next) => {
    const location = req.body.location;
    const title = req.body.title; 
    const company = req.body.company;
    const skills = req.body.skills;
    const language = req.body.language;
    const name = req.body.name;

    user.getUserByLocation(location, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
            res.json({
                success: true,
                user: {
                    name: user.name,
                    location: user.location,
                    title: user.title,
                }
            });
        } else {
            return res.json({success: false, msg: 'Users not found'})
        };
    });
    user.getUserByTitle(title, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
            res.json({
                success: true,
                user: {
                    name: user.name,
                    location: user.location,
                    title: user.title,
                }
            });
        } else {
            return res.json({success: false, msg: 'Users not found'})
        };
    });
    user.getUserByCompany(company, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
            res.json({
                success: true,
                user: {
                    name: user.name,
                    location: user.location,
                    title: user.title,
                }
            });
        } else {
            return res.json({success: false, msg: 'Users not found'})
        };
    });
    user.getUserBySkills(skills, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
            res.json({
                success: true,
                user: {
                    name: user.name,
                    location: user.location,
                    title: user.title,
                }
            });
        } else {
            return res.json({success: false, msg: 'Users not found'})
        };
    });
    user.getUserByLanguage(language, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
            res.json({
                success: true,
                user: {
                    name: user.name,
                    location: user.location,
                    title: user.title,
                }
            
            });

        } else {
            return res.json({success: false, msg: 'Users not found'})
        };
    });
});

router.get('/app-search-results', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});


module.exports = router;