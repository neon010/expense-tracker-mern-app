const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(`mongodb+srv://dbcourseadmin:dbcourseadmin20@cluster0.ze2vl.mongodb.net/expense-tracker?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;