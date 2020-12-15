const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
dotenv.config();
connectDB();


const transaction = require("./routes/Transaction");
app.use("/api/v1/transaction", transaction);


const PORT = process.env.PORT || 5000;
process.on('uncaughtException', function (err) {
    console.log(err);
}); 

app.listen(PORT, console.log(`listening on port ${PORT}`.yellow.bold));