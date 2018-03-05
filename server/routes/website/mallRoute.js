module.exports = function(models, router, co, mall){
  var mallService = require(__base + 'app/service/mallService');
  // Get all event
  router.get('/mall', function(req, res, next){
    co(function *(){
      try{
        var event = yield eventService.getAllEvent();

      return {event};
      }catch(err){
        console.log("error");
        return router.databaseError(res, err);
      }
    }).then(function(response){
      const event = response.event;

      console.log(event);

      return res.json({
        success: true,
        mall: response.event
      })
    })
  })

  // Get mall by id
  router.get('/mall/:id', function(req, res, next){

    var id = req.params.id;
    co(function *(){
      try{
        var mall = yield mallService.getMallbyId(id);

      return {mall};
      }catch(err){
        console.log("error");
        return router.databaseError(res, err);
      }
    }).then(function(response){
      const mall = response.mall;

      console.log(mall);

      return res.json({
        success: true,
        mall: response.mall
      })
    })
  })

  // add mall
  router.post('/mall', function(req, res, next){
      var body = req.body;

      co(function *(){
        try{
          var mall = yield mallService.addMall(body);

          return {mall};
        }catch(err){
          console.log("error");
          return router.databaseError(res, err);
        }
      }).then(function(response){
        const mall = response.mall;
        console.log(mall);

        return res.json({
          success: true,
          mall: response.mall
        })
      })
  })

  // update mall
  router.put('/mall', function(req, res, next){

  })

  // delete mall
  router.delete('/mall', function(req, res, next){

  })

  return this;
}
