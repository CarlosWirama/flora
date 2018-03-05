module.exports = function(models, router, co, mall){
  var tenantService = require(__base + 'app/service/tenantService');

  // Get all tenant
  router.get('/tenant', function(req, res, next){
    co(function *(){
      try{
        var tenant = yield tenantService.getAllTenant();

        return {tenant};
      }catch(err){
        console.log("error");
        return router.databaseError(res, err);
      }
    }).then(function(response){
      const event = response.tenant;

      return res.json({
        success: true,
        mall: response.tenant
      })
    })
  })

  // Get event by id
  router.get('/tenant/:id', function(req, res, next){

    var id = req.params.id;
    co(function *(){
      try{
        var tenant = yield tenantService.getTenantbyId(id);

      return {tenant};
      }catch(err){
        console.log("error");
        return router.databaseError(res, err);
      }
    }).then(function(response){
      const event = response.tenant;

      console.log(tenant);

      return res.json({
        success: true,
        mall: response.tenant
      })
    })
  })

  // post tenant
  router.post('/tenant', function(req, res, next){

  })

  // update tenant
  router.put('/tenant', function(req, res, next){

  })

  // delete tenant
  router.delete('/tenant', function(req, res, next){

  })

  return this;
}
