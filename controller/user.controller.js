const connection = require("../database");

function getStart(request, response) {
  let respuesta = { error: true, codigo: 200, mensaje: "Punto de Inicio" };
  response.send(respuesta);
}

function postRegistro(request, response) {
  
  let params = [
    request.body.nombre,
    request.body.apellido,
    request.body.email,
    request.body.url,
    request.body.password,
  ];
  let sql =
    "INSERT INTO `usuario`(`nombre`, `apellidos`, `correo`, `foto`, `password`) VALUES(?,?,?,?,?) ";

  connection.query(sql, params, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
      console.log(result);
    }
  });
}

function postLogin(request, response) {
  let params = [request.body.email, request.body.password];
  let sql = "SELECT * FROM usuario WHERE correo = ? && password = ?;";

  connection.query(sql, params, function (err, result) {
    if (err) {
      console.log(err);
    } else {
        if(result.length > 0){
      response.send(result);
      console.log(result);
        }
        else{
            let respuesta ={ error: true, codigo: 200, mensaje: "No se ha encontrado ningun usuario "};
            response.send(respuesta);
        }
    }
  });
}


module.exports = {postRegistro, postLogin}