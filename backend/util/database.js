let mongoose = require('mongoose');

const server = process.env.MONGODB_URL || 'mongodb://localhost:27017'; 
const database = process.env.MONGODB_DATABASE | 'sms-sender';      

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`${server}/${database}`, {useNewUrlParser:true})
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()