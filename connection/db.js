const mongoose = require('mongoose')

const URI = "mongodb+srv://chiderajohnson:chiderajohnson2000@cluster0.qgukh.mongodb.net/taskman_ng?retryWrites=true&w=majority"

const connectDB = async () => {
    await (mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true}))
    console.log('connected')
}



module.exports = connectDB;