const express = require("express"); //asking for express
const cors = require("cors"); //cors is usually for apis most of the time, 
//can get you through permissions
const mysql = require("mysql"); // pull the mysql package

const app = express();

//connecting to the database and checking for errors if any are present
//requesting password and root from mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "losaromas",
});

//if any errors return error 
//or return successful if connection works
db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("db connection successful.");
  }
});


app.use(cors()); //only using cors here
app.use(express.json()); //formatting all results into json
// getting the api endpoint and doing a db.query that selects all items from tables products in sql
// and returns a json file

app.listen(4000, () =>{
    console.log('console server listening to port 4000')
})

//get products from database using query selectors
//get error or return results and send to end point
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
})

// app.get("/products", (req, res) => {
//   db.query("SELECT * FROM products", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
// let myport = 4000;
// app.listen(myport, () => {
//   console.log(`port is running on ${myport}`);
// });