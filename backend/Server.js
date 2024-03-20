// Dependencies & Packages Import
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./database/database.js");
const WebRouter = require("./middleware/routes.js");

// Miscellaneous
const PORT = 3000;

// Database Connection
database.connect();

// Body Parser Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
app.use(cors());

// External Routers
app.use(WebRouter);

// Server Activity Listen
app.listen(PORT, () => console.log(`Server is Active on PORT ${PORT}`));
