var Model = require('./ModelUsuario');

module.exports = function(req, res){
      var data = new Model({
        username: req.body.username,
        password: req.body.password
        });

        console.log(data);
        data.save(function(err) {
          if (err){
            //data = JSON.parse(data);
              res.send(data);
              console.log(err);
              return err;
          }
          
          res.json({ message: 'Novo Usuário', data: data });
          
        });
    };


