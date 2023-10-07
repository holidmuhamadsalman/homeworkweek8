var express = require("express");
var app = express();
var pool = require("./query.js");

pool.connect((err, res) => {
      if (err) {
            throw err;
      }
      console.log("connected");
});

app.get("/film", (req, res) => {
      pool.query("SELECT * FROM film", (err, result) => {
            if (err) {
                  throw err;
            }
            res.send(result.rows);
      });
});

app.get("/film/id", (req, res) => {
      pool.query("SELECT * FROM film WHERE id_film=1", (err, result) => {
            if (err) {
                  throw err;
            }
            res.send(result.rows);
      });
});

app.get("/category", (req, res) => {
      pool.query("SELECT * FROM category", (err, result) => {
            if (err) {
                  throw err;
            }
            res.send(result.rows);
      });
});

app.get("/film/category", (req, res) => {
      pool.query("SELECT film.id_film, category.nama_category, film.nama_film from film inner join category on film.category_id = category.id_category WHERE category_id=1", (err, result) => {
            if (err) {
                  throw err;
            }
            res.send(result.rows);
      });
});

app.listen(2000);
