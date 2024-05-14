const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://sahajpotal:Ram1234@cluster0.inzgugv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`Database Connected Successfully`);
    } catch (error) {
        console.log(error.message);

    }
}

module.exports = dbConnection;