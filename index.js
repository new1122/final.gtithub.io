mongoose.connect('mongodb://localhost:27017/abhidb', {useNewUrlParser: true});
const MyModel = mongoose.model('Test', new Schema({ 
  name: String,
  number: Number,
  email: String
}));
// Works
MyModel.findOne(function(error, result) { /* ... */ });