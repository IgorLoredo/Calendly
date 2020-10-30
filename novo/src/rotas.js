module.exports = {
    getUsuarios: function(req, res){
      res.json({message: "rota para GET do /usuarios"})
    },
    postUsuarios: function(req, res){
      req.json({ postUsuarios: require('./controllerCriaUsuario'),}) 
      res.json({message: "rota para POST do /usuarios"})
      
    },
    login: function(req, res){
      req.json({login: require('./controllerLogin'),})
      
    res.json({message: 'rota de login'})
    }
  }

  