const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
dotenv.config();
connectDB();


const transaction = require("./routes/Transaction");
app.use("/api/v1/transaction", transaction);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`.yellow.bold));