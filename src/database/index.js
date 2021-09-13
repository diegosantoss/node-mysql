const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist"
});

module.exports.index = (sql, callback) => {
  connection.query(sql, function (error, result, fields) {
    if (error) {
      return false;
    }

    callback(JSON.parse(JSON.stringify(result)));
  });

}

module.exports.create = (sql, values, callback) => {
  connection.query(sql, values, function (error, result, fields) {
    if (error) {
      return false;
    }

    callback(result.insertId);
  });
}

module.exports.update = (sql, values, callback) => {
  connection.query(sql, values, function (error, result, fields) {
    if (error) {
      return false;
    }

    callback(result);
  });
}

module.exports.delete = (sql, values, callback) => {
  connection.query(sql, values, function (error, result, fields) {
    if (error) {
      return false;
    }

    callback();
  });
}

module.exports.findOne = (sql, values, callback) => {
  connection.query(sql, values, function(error, result, fields){
    if(error){
      return false;
    }

    callback(JSON.parse(JSON.stringify(result)));
  })
}