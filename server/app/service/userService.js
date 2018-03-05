var User = MODEL.User;

exports.getUsers = function(parameters) {
  return new Promise( (resolve, reject) => {
    try {
      User.find(parameters.queryParameters ? parameters.queryParameters:'').exec( function(err, users) {
        if(err) reject(err);
        resolve(users);
      });
    } catch (err) {
      reject(err);
    }
  });
}

exports.getuserbyId = function(parameters){
  return new Promise((resolve, reject) => {
    try {
      User.findOne(parameters.queryParameters).exec(function (err, user){
          if(err){
            reject(err);
          }
          resolve(user);
      })
    } catch (err) {
      reject(err);
    }
  })
}

//update User
exports.updateUser = function(userId){
    return new Promise((resolve, reject) => {
      try {
        User.findById(userId, function (err, user){
            if(err){
              reject(err);
            }
            resolve(user);
        })
      } catch (err) {
        reject(err);
      }
    })
}

// Delete user by id
exports.deleteUserbyId = function(userId){
    return new Promise((resolve, reject) => {
      try {
        User.findById(userId).remove().exec(function (err, user){
            if(err){
              reject(err);
            }
            resolve(user);
        })
      } catch (err) {
        reject(err);
      }
    })
}
