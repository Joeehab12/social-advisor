module.exports = function(app){
    var loginController = require('../controllers/loginController.js');
    var feedController = require('../controllers/feedController.js');
    var askController = require('../controllers/askController.js');
    var registerController = require('../controllers/registerController.js');
    var problemController = require('../controllers/problemController.js');
    var searchController = require('../controllers/searchController.js');
    var commentPostController = require('../controllers/commentPostController.js');
    var commentGetController = require('../controllers/commentGetController.js');
    var answerGetController = require('../controllers/answerGetController.js');
    var answerPostController = require('../controllers/answerPostController.js');
    var userController = require('../controllers/userController.js');
    var profileController = require('../controllers/profileController.js');
    var problemUpvoteController = require('../controllers/problemUpvoteController.js');
    var reportPostController = require('../controllers/reportPostController.js');
    var reportGetController = require('../controllers/reportGetController.js');
    var acceptedPostController = require('../controllers/acceptedPostController.js');
    var loginMiddleware = require('../middlewares/loginMiddleware.js');


    app.post('/login',loginController.login);
    app.post('/register',registerController.register)
    app.use(loginMiddleware);
    app.post('/feed/search',searchController.search);
    app.get('/feed',feedController.feed);
    app.post('/problem/:id',problemController.problem);
    app.post('/ask',askController.ask);
    app.post('/comment/:id',commentPostController.postComment);
    app.get('/comment/:id',commentGetController.getComment);
    app.post('/answers/:id',answerPostController.postAnswer)
    app.get('/answers/:id',answerGetController.getAnswer);
    app.get('/user/:id',userController.user);
    app.post('/profile',profileController.profile);
    app.post('/problem-upvotes/:id',problemUpvoteController.problemUpvote);
    app.post('/report',reportPostController.postReport);
    app.get('/report',reportGetController.getReport);
    app.post('/accept/:id',acceptedPostController.postAccepted);
}
