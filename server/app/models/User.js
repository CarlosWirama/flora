var mongoose = LIBRARY.mongoose;
var Schema = mongoose.Schema;

//// Define basketItemSchema first to be embedded in userSchema
var basketItemSchema = new Schema(
  {
    productID : {type: Schema.Types.ObjectId, ref: 'Product'},
    deliveryTime: {
      type: Date,
      format : "%d-%m-%Y"
    },
    addressText : String,
    addressCoordinates : String,
    senderName : String,
    senderPhone : String,
    recipientName : String,
    recipientPhone : String,
    card : String
  },
  { 
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } 
  }
);

//// User Schema
var userSchema = new Schema(
  {
    fullname : String,
    email : String,
    password : String,
    basketItem: basketItemSchema
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } 
  }
);
userSchema.methods.validPassword = function(password) {
    if(!password || !this.password) {
        return false;
    }
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema)