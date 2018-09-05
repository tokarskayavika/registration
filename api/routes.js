function Router(app) {
    const express = require('express');
    const router = express.Router();
    const models = require('../db/models');

    router.post('/register', function(request, response) {
        const userModel = new models.user({
            name: request.body.name,
            password: request.body.password
        });

        userModel.save(function(error, result) {
            response.send(error || result);
        });
    });

    app.use('/api', router);
}

module.exports = Router;