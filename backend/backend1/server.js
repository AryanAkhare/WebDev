/**************************************************
 * STEP 1: Create a folder
 * STEP 2: Open terminal inside it
 * STEP 3: npm init -y
 * STEP 4: npm install express
 * STEP 5: create server.js
 **************************************************/

/**************************************************
 * WHAT IS EXPRESS?
 * Express is a Node.js framework.
 * It helps us:
 * - create a server
 * - handle requests (GET, POST, PUT, DELETE)
 * - send responses to the client (browser / frontend)
 **************************************************/

// Import express library
const express = require("express");

/**************************************************
 * app = our server
 * Think of app as a restaurant
 * Clients (browser/frontend) come and place orders (requests)
 **************************************************/
const app = express();

/**************************************************
 * MIDDLEWARE
 * express.json() reads JSON data from request body
 * Without this, req.body will be undefined
 **************************************************/
app.use(express.json());

/**************************************************
 * PORT
 * Port is a door number where server listens
 * http://localhost:3000
 **************************************************/
const PORT = 3000;

/**************************************************
 * START SERVER
 * Server keeps running and waits for requests
 **************************************************/
app.listen(PORT, () => {
  console.log("Server started at 3000");
});

/**************************************************
 * ROUTES
 * A route = URL + HTTP method
 **************************************************/

/**************************************************
 * GET REQUEST
 * GET is used to READ data
 * GET is idempotent (calling it many times = same result)
 **************************************************/
app.get("/", (req, res) => {
  res.send("Hello");
});

/**************************************************
 * POST REQUEST
 * POST is used to CREATE data
 * POST is NOT idempotent
 **************************************************/
app.post("/api/cars", (req, res) => {
  /************************************************
   * req.body contains data sent by client
   * Example:
   * {
   *   "name": "Swift",
   *   "brand": "Maruti"
   * }
   ************************************************/
  const { name, brand } = req.body;

  console.log("Car name:", name);
  console.log("Car brand:", brand);

  /************************************************
   * Always send a response
   * If you don’t, request will hang forever
   ************************************************/
  res.status(201).json({
    message: "Car created successfully",
    car: {
      name: name,
      brand: brand,
    },
  });
});

/**************************************************
 * PUT REQUEST
 * PUT is used to UPDATE existing data
 * PUT is idempotent
 **************************************************/
app.put("/api/cars/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: `Car with id ${id} updated`,
  });
});

/**************************************************
 * DELETE REQUEST
 * DELETE is used to remove data
 * DELETE is idempotent
 **************************************************/
app.delete("/api/cars/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: `Car with id ${id} deleted`,
  });
});

/**************************************************
 * SUMMARY (VERY IMPORTANT)
 *
 * GET     → read data
 * POST    → create data
 * PUT     → update data
 * DELETE  → delete data
 *
 * req     → request from client
 * res     → response from server
 * req.body → data sent by client
 * req.params → data from URL
 **************************************************/

//promise
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection failed");
    console.error(err);
  });
