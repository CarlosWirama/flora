/**
 * Run for setting up seed data
 */

// var Product = require(__base + 'app/model').Product;
// var Product = require(__base + 'app/models/Product');
var Product = MODEL.Product;

module.exports = function(router) {

  // seed database
  router.get('/seed/product', function(req, res) {
    var starterProducts = require('./productSeed.json');
    Product.create(starterProducts, function(err, results) {
      if (err) throw err;
      res.send(results);
    }); 
  });

}