const colors = require('colors');

const logger = (req, res, next) => {
    if (req.method === 'GET') {
        console.log(req.method.green.bold, `${req.protocol}://${req.get('host')}${req.originalUrl}`.italic, req.method.green.bold)
    }

    if (req.method === 'POST') {
        console.log(req.method.cyan.bold, `${req.protocol}://${req.get('host')}${req.originalUrl}`, req.method.cyan.bold)
    }

    if (req.method === 'PUT') {
        console.log(req.method.yellow.bold, `${req.protocol}://${req.get('host')}${req.originalUrl}`, req.method.yellow.bold)
    }

    if (req.method === 'DELETE') {
        console.log(req.method.red.bold, `${req.protocol}://${req.get('host')}${req.originalUrl}`, req.method.red.bold)
    }

    next();
};

module.exports = logger;