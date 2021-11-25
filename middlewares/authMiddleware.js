/**
 * This middleware is used to check whether a user is logged in or not
 */
const authMiddileware = (req, res, next) => {
  //console.log('Login Status:', req.isAuthenticated())
  if(req.isAuthenticated()) return next()
  res.redirect('/login')
 // next()
}


module.exports = authMiddileware
