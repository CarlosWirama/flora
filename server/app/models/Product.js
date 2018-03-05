var mongoose = LIBRARY.mongoose;
var Schema = mongoose.Schema;

var productSchema = new Schema(
  {
    name : String,
    slug : String, // example: cymbidium-boat-orchid-yellow-pattern-dot-red
    tagLine : String,
    images : [String], // images URLs
    caution : String, // for extra caring instruction, etc.
    description : String,
    price : String,
    salePrice : String,
    preOrderDuration : Number,
    loved : Number,
    shared : Number,
    displayStatus : String, // possible value: 'available', 'out of stock', 'not available', 'hidden'
    tags : [Schema.Types.Mixed], // example: 'phalaenopsis', 'amabilis', 'moon', 'orchid', 'anggrek', 'bulan'
    //// mixed to also fit ObjectId in tagCollection
  },
  { 
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } 
  }
);

module.exports = mongoose.model('products', productSchema);
