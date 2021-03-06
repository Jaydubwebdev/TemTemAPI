const mongoose = require('mongoose');

const connectDB = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log(`MongoDB connected to ${connect.connection.name}.`.yellow.bold);
};

module.exports = connectDB;