//// READ
exports.get = function(Model, param) {
  return new Promise( (resolve, reject) => {
    try {
      // model.findOne(parameters.queryParameters).exec(function (err, user){
      Model.find(param.queryParameters ? param.queryParameters:'').exec( function(err, results) {
        if(err) reject(err);
        resolve(results);
      });
    } catch (err) {
      reject(err);
    }
  });
}

//// CREATE
exports.create = function(Model, param){
    return new Promise((resolve, reject) => {
        var model = new Model();

        //// set the model's parameters
        // TODO
        model.email = email;
        model.password = password;
        // for (var key in model){
        //   model[key] = input{key}
        // }

        model.save(function (err, model) {
            if (err) {
                return done (err);
            }
            Model.findOne({ _id: model._id}).exec(function (err, model) {
                if (err) return done (err);
                req.login(model, function (err) {
                    if (err) return done (err);
                    return done (null, model);
                })
            })
        })
    })
}

//// UPDATE
exports.update = function(Model, id){
    return new Promise((resolve, reject) => {
      try {
        Model.findById(id, function (err, model){
            if(err){
              reject(err);
            }
            resolve(model);
        })
      } catch (err) {
        reject(err);
      }
    })
}

//// DELETE
exports.delete = function(Model, id){
    return new Promise((resolve, reject) => {
      try {
        Model.findById(id).remove().exec(function (err, model){
            if(err){
              reject(err);
            }
            resolve(model);
        })
      } catch (err) {
        reject(err);
      }
    })
}