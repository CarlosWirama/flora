module.exports = function(models, router, co){
  var eventService = require(__base + 'app/service/eventService');

  // Get all event
  router.get('/event', function(req, res, next){
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

      return res.json({
        success: true,
        mall: response.event
      })
    })
  })

  // Get event by id
  router.get('/event/:id', function(req, res, next){
      var id = req.params.id;
      co(function *(){
        try{
          var event = yield eventService.getEventbyId(id);

        return {event};
        }catch(err){
          console.log("error");
          return router.databaseError(res, err);
        }
      }).then(function(response){
        const event = response.event;

        return res.json({
          success: true,
          mall: response.event
        })
      })
    })


  // add event
  router.post('/event', function(req, res, next){

  })

  // update event
  router.put('/event', function(req, res, next){

  })

  // delete event
  router.delete('/event', function(req, res, next){

  })

  return this;
}
