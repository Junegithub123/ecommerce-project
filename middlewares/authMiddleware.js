const authMiddileware = (req, res, next) => {
  //console.log('Login Status:', req.isAuthenticated())
  if(req.isAuthenticated()) return next()
  res.redirect('/login')
 // next()
}


module.exports = authMiddileware
