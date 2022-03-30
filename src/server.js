const express = require("express"); //asking for express
const app = express(); // new instance of express
const cors = require("cors"); //cors is usually for apis most of the time, 
//can get you through permissions
const mysql = require("mysql"); // pull the mysql package
const morgan = require('morgan'); //morgan helps see requests and how long it takes to process

app.use(morgan('combined')); //combined allows to see request and where theyre coming from
app.use(cors()); //only using cors here
app.use(express.json()); //formatting all results into json
// getting the api endpoint and doing a db.query that selects all items from tables products in sql
// and returns a json file


//if any errors return error 
//or return successful if database connection works
// connection.connect((err) => {
//   if (err) {
//     return err;
//   } else {
//     console.log("db connection successful.");
//   }
// });

//get route to respond to /products
app.get('/products', (req,res) => {
    let product1 = {productName: "Touch of Fall", productScent: "Vanilla Pumpkin Marshmallow"}
    let product2 = {productName: "Infusion", productScent: "White Tea"}
    res.json([product1, product2])
    
    // res.send('nodemon auto aupdates when i save this file')
})

<<<<<<< HEAD
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

=======
//route captures product id being stored in params
app.get('/products/:id', (req,res) => {
   console.log('fetching content with id:' + req.params.id)
   
   //connecting to the database and checking for errors if any are present
//requesting password from root of mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "losaromas",
  })

  const productId = req.params.id // variable for product id to pass through in connection below
  const queryString = "SELECT * FROM products WHERE id = ?" //variable for queries
  connection.query(queryString, [productId], (err, rows, fields) => {
    //if any errors return error 
    //or return successful if database connection works
    if(err) {
        console.log('failed to query for products:' + err)
        res.sendStatus(500)
        return
    }
    
    console.log("i think we fetched products okay")

    //map through products and rename rows to appear on site
    const products = rows.map((row) => {
        return {name: row.title, ounces: row.size}
    })

    res.json(products)
})
    //res.end() //end fetch but have to wait for connection 
})

//get root route to respond //node src/server.js
app.get("/", (req, res) => {
    console.log("responding to root route")
    res.send('hello from roooot')
})

//localhost:3000
app.listen(3001, () => {
    console.log('server listening to port 3001')
})

// let myport = 4000;
// app.listen(myport, () => {
//   console.log(`port is running on ${myport}`);
// });


//calling express to get database using query selectors 
//and calling products table
>>>>>>> database
// app.get("/products", (req, res) => {
//   db.query("SELECT * FROM products", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.get("/api/products/:size/:price", (req, res) => {
//     const reqSize = req.params.size
//     const reqPrice = req.params.price
//     console.log(reqSize);
//     db.query("SELECT * FROM products", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         //res.send(result);
//         //result is an array, method filter to go through each item and return
//         result.filter(item => {
//             if(item.size === reqSize && item.price === reqPrice){
//                 console.log(item);
//                 res.send(item)
//             }
//         })
//       }
//     });
//   });

