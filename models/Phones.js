// require mongoose
var mongoose = require('mongoose');
// create Schema class
var Schema = mongoose.Schema;

// Create article schema
var PhoneSchema = new Schema({
  // title is required
  FirstName: {
    type:String,
    required:true
  },
  LastName: {
    type:String,
    required:true
  },
  // link is required
  OfficeExtension: {
    type:String
    
  },
  MobileExtension: {
    type:String
    
  },
  MobileNumber: {
    type:String
    
  },
  Email: {
    type:String
    
  },
  // this only saves one note's ObjectId. ref refers to the Note model.
  note: {
      type: Schema.Types.ObjectId,
      ref: 'Note'
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model('Phones', PhoneSchema);

// export the model
module.exports = Article;