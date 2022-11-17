const ER = require('../models/ERModels');

const ERController = {};

ERController.getERs = (req, res, next) => {
    ER.find({})
        .then(data => {
            res.locals.ers = data;
            return next();
        })
        .catch(err => {
            return next({
                log: `ERController.getERs: ERROR ${err}`,
                message: { err: 'Error occured in ERController.getERs' }
            });
        });
}

ERController.addER = (req, res, next) => {
    // console.log('hello from addER');
    // console.log('req.body', req.body);
    const { location, address, waitTime } = req.body
    ER.create({
        location, address, waitTime
    })
        .then(data => {
            // console.log('successful db query')
            res.locals.er = data;
            return next();
        })
        .catch(err => {
            // console.log('db query failed, error was: ', err)
            return next({
                log: `ERController.addER: ERROR: ${err}`,
                message: { err: 'Error occured in ERController.addER' }
            });
        });
};

module.exports = ERController;
