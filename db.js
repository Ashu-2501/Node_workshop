const mongoose =  require('mongoose')


const username = encodeURIComponent('Ashutosh');
const password = encodeURIComponent('Ashu2501');
const databaseName = 'hotel';
const host = 'localhost';
const port = 27017;

const mongoURL = `mongodb://${username}:${password}@${host}:${port}/${databaseName}`;



mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin'

})

const db= mongoose.connection;


db.on('connected',()=>{
    console.log("Connected to MongoDB server");
});

db.on('disconnected',()=>{
    console.log("Disconnected from MongoDB server");
});

db.on('error',()=>{
    console.log("Error connecting to MongoDB server");
});

module.exports = db;

