module.exports = function(models, express, passport, config, jwt){
  
  var co = LIBRARY.co;

  var router = express.Router();

  /**
   * Validate if parameters are not empty
   *
   * body : request body
   * params : array of 'required' parameters to be validated
   */
  router.validateParameters = function(body, params) {

    // collect empty params
    var emptyParams = "";
    for(var i=0; i<params.length; i++){
        var key = params[i];
        var str = body[key];
        if (str === undefined || str === "" ) {
            emptyParams += key + ", ";
        }
    }

    // output warning response
    if(emptyParams.length>0){
        return "requires " + emptyParams;
    }
    return null;
  }

  router.authenticationError = function(res, message){
    return res.json({
      error: 'authentication error',
      success: false,
      message: message
    });
  }

  router.missingParametersError = function(res, message){
    console.log(message)
    return jsonError(res, 'missing parameters', message);
  }

  router.databaseError = function(res, message){
    return jsonError(res, 'database error', message);
  }

  /*
  router.get('/', function (req, res) {
      console.log('I received a GET API');
      return res.json({
        success : true
      })
  })
  */

  router.createToken = function createToken(user, res){

    var generateUser ={
      _id : user._id,
      email : user.email,
      //nama : user.fullname
    }

    var generateToken = jwt.sign({user: generateUser}, config.sessionSecret, {
      expiresIn: config.sessionExpirationInSeconds
    });

    return res.json({
      token : generateToken,
      success : true,
      user : generateUser
    })
  }

 function jsonError(res, error,message){
     return res.status(200).send({
       error  : error,
       statusCode: 400,
       success: false,
       message: message
     });
  }

  router.post('/signup', function (req, res, next) {
    // console.log(req.body.email);
    // console.log(req.body.password);
    var validationErrorMessage = router.validateParameters(req.body, ['email', 'password']);
    if(validationErrorMessage){
      return router.missingParametersError(res, validationErrorMessage);
    }

    passport.authenticate('local-signup', function(err, user, info) {
      if (err) {
          console.log(err);
        return router.authenticationError(res, err);
      }
      
      return router.createToken(user, res);
      })(req, res, next);

  });

  router.post('/login', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
          return router.authenticationError(res, err);
      }

      if (!user) {
          return router.authenticationError(res,"user not found");
      }

      // if user is found and password is right
      else {
        return createToken(user, res);
        // return res.json({
        //     success:true,
        //     user : user
        //   });
      }

      })(req, res, next);
  });
  
  require('./api/userRoute.js')(models, router, co);
  
  return router;
}
