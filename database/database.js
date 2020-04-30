var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout');

var userDataSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    adress: String,
    city: String,
    zipCode: Number,
    creditCard: Number,
    expiryDate: Date,
    zipCodeCard: Number,
    cvv: Number,
    billingZipCode: Number
});
let save = () => {
    
  }
let CheckoutData = mongoose.model('CheckoutData', userDataSchema);
module.exports.save = save;