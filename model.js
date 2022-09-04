var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
  
module.exports = new mongoose.model('Image', imageSchema);