var jwt = require('jsonwebtoken');

module.exports = function(router, passport, config){

  router.authenticationError = function(res, message){
    return res.json({
      error: 'authentication error',
      success: false,
      message: message
    });
  }

  // router.missingParametersError = function(res, message){
  //   return jsonError(res, 'missing parameters', message);
  // }

  // router.databaseError = function(res, message){
  //   return jsonError(res, 'database error', message);
  // }

  function createToken(user, res){
    var generateUser = {
      _id : user._id,
      email : user.email,
      nama : user.fullname
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

  router.post('/signup', function (req, res, next) {
    var fullname = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    var password = req.body.password;

    passport.authenticate('local-signup', function(err, user, info) {
      if (err) {
        return router.authenticationError(res, err);
      }
      // if user is found and password is right
      else {
        return res.json({
          success:true,
          user : user
        });
      }
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
      }
    })(req, res, next);
  });

  require('./api/initialSetup.js')(router);
  require('./api/userRoute.js')(router);
    // require('./website/mallRoute.js')(models, router, co);
    //require('./api/eventRoute.js')(models, router, co);

  return router;
}
