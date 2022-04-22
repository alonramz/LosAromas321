const express = require("express"); //asking for express
const app = express(); // new instance of express
const cors = require("cors"); //cors is usually for apis most of the time,
//can get you through permissions
const mysql = require("mysql"); // pull the mysql package

app.use(cors()); //only using cors here
app.use(express.json()); //formatting all results into json
// getting the api endpoint and doing a db.query that selects all items from tables products in sql
// and returns a json file

//get route to respond to /products
app.get("/products", (req, res) => {
  //connecting to the database and checking for errors if any are present
  //requesting password from root of mysql
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "losaromas",
  });

  const queryString = "SELECT * FROM products; "; //variable for queries
  connection.query(queryString, (err, rows, fields) => {
    //if any errors return error
    //or return successful if database connection works
    if (err) {
      console.log("failed to query for products:" + err);
      res.sendStatus(500);
      return;
    }

    console.log(rows);
    res.json(rows);


    console.log("i think we fetched products okay");

  // res.send('nodemon auto aupdates when i save this file')
});

//route captures product id being stored in params
app.get("/products/:id", (req, res) => {
  console.log("fetching content with id:" + req.params.id);



  const productId = req.params.id; // variable for product id to pass through in connection below
  

    //map through products and rename rows to appear on site
    const products = rows.map((row) => {
      return { name: row.title, ounces: row.size };
    });

    res.json(products);
  });
  //res.end() //end fetch but have to wait for connection
});

//get root route to respond //node src/server.js
app.get("/", (req, res) => {
  console.log("responding to root route");
  res.send("hello from roooot");
});

//localhost:3000
app.listen(3001, () => {
  console.log("server listening to port 3001");
});


