var co = LIBRARY.co;

module.exports = function(router){
  var userService = require(__base + 'app/service/userService');

  // Get All User
  router.get('/user', function(req, res, next){
    co(function *(){
      try{
        var users = yield userService.getUsers();
        return {users};
      } catch(err) {
        console.log("error");
        return router.databaseError(res, err);
      }
    }).then(function(response){

      var userArray = [];
      for(var i=0; i<response.users.length; i++){
        var currentUser = response.users[i];
        var userObject = {};
        userObject._id = currentUser._id;
        userObject.password = currentUser.password;
        userArray.push(userObject);
      }

      const user = userArray;
      
      return res.json({
        success: true,
        user: user
      })
    }).catch(function(err){
      return res.json({
        err
      })
    })
  })
 
  // Get User by id
  router.get('/user/:id', function(req, res, next){
    co(function *(){
      try{
        var User = yield UserService.getUserbyId(req.params.id);

        return {User};
      }catch(err){
        console.log("error");
        return router.databaseError(res, err);
      }
    }).then(function(response){
      const User = response.user;

      console.log(user);

      return res.json({
        success: true,
        user: response.user
      })
    })
  })


  // post user
  router.post('/user', function(req, res, next){

  })

  // update user
  // router.put('/user/:id', function(req, res, next){
  // })

  // delete user
  router.delete('/user/:id', function(req, res, next){

  })

  return this;
}
