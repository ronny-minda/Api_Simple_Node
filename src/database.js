const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI);

// ERROR DESCONOSIDO ↧ ↧
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// ERROR DESCONOSIDO ↥ ↥

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})