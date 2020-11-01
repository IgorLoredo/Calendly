module.exports = {
  getUsuarios: function(req, res){
    req.send("resquside");
    res.status(status).json({message: "rota para GET do /usuarios"})
  },
  postUsuarios: require('./controllerCriaUsuario'),

  login: require('./controllerLogin'),
 
}
  



