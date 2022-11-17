const express = require('express');

const ERController = require('../controllers/ERController');

const router = express.Router();

router.get('/',
    ERController.getERs,
    (req, res) => {
        res.status(200).json(res.locals.ers);
    }
);

router.post('/ER',
    // (req, res, next) => {
    //     console.log('hello from post ER');
    //     return next();
    // },
    ERController.addER,
    (req, res) => {
        res.status(200).json(res.locals.er);
    }
);

module.exports = router;
