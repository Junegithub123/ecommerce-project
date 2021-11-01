const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://june:altd@cluster0.wmh8a.mongodb.net/x-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})
