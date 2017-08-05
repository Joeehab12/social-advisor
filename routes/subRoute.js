module.exports = function(app){
    var loginController = require('../controllers/loginController.js');
    var feedController = require('../controllers/feedController.js');
    var askController = require('../controllers/askController.js');
    var registerController = require('../controllers/registerController.js');
    var problemController = require('../controllers/problemController.js');

    var loginMiddleware = require('../middlewares/loginMiddleware.js');

    app.post('/login',loginController.login);
    app.post('/register',registerController.register)
    app.use(loginMiddleware);
    app.get('/feed',feedController.feed);
    app.post('/problem/:id',problemController.problem);
    app.post('/ask',askController.ask);

}
