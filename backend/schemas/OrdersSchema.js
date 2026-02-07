const { Schema } = require("mongoose");
const OrdersSchema = new Schema({
      instrument: String, 
      qty: Number, 
      avg: Number ,
      price: Number,
      net: String,
      day: String , 
      mode: String , 

      
});
module.exports = {OrdersSchema}; 