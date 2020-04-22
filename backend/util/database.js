let mongoose = require('mongoose');

const server = process.env.MONGODB_URL || 'mongodb://localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = process.env.MONGODB_DATABASE | 'sms-sender';      // REPLACE WITH YOUR DB NAME

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()