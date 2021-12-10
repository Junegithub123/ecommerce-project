const mongoose = require('mongoose')
const config = require('./config')
// mongoose.connect('mongodb+srv://june:altd@cluster0.wmh8a.mongodb.net/x-store', {
//  //mongoose.connect('mongodb://localhost:27017/x-store', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

mongoose.set('debug', process.env.NODE_ENV !== 'production')

mongoose.connect(config.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})


module.exports = mongoose.connection
