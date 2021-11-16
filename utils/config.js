const { model } = require("mongoose");

// model.exports = {
//   port: parseInt(process.env.PORT) || 3000,
//   mongoUrl: process.env.MONGO_URL || 'mongodb+srv://june:altd@cluster0.wmh8a.mongodb.net/x-store'
// }

module.exports = {
  port: parseInt(process.env.PORT) || 3000,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/x-store'
}
