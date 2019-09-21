// routes/index.js

const express = require('express');
const secured = require('../middleware/secured');
const router = express.Router();

/* GET home page. */
router.get('/', secured(), (req, res, next) => {
    let bool = false;
    if (req.isAuthenticated())
    {
        bool = true;
    }
    console.log(req.user.nickname);
    res.render('index', { title: 'Auth0 Webapp sample Nodejs', loggedin: bool, username: req.user.nickname });
});

router.get('/main', secured(), (req, res, next) => {
    const { _raw, _json, ...userProfile } = req.user;
    const userP = JSON.stringify(userProfile, null, 2)
    console.log(userP)
    res.render('main', { title: 'Auth0 Webapp sample Nodejs', userP: userP });
});

module.exports = router;