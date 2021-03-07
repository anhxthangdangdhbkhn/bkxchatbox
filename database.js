//The require(‘mongoose’) call above returns a Singleton object. 
//It means that the first time you call require(‘mongoose’), it 
//is creating an instance of the Mongoose class and returning it. 
//On subsequent calls, it will return the same instance that was 
//created and returned to you the first time because of how module 
//import/export works in ES6.
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {        
        mongoose.connect("mongodb://admin:tien123@cluster0-shard-00-00.lpwwp.mongodb.net:27017,cluster0-shard-00-01.lpwwp.mongodb.net:27017,cluster0-shard-00-02.lpwwp.mongodb.net:27017/bachkinhxaychat?ssl=true&replicaSet=atlas-wt8avx-shard-0&authSource=admin&retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();