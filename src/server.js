require('dotenv').config()
const express = require('express')
const database = require('./config/database')

// Models
const User = require("./models/user")

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000
        this.server = require('http').createServer(this.app)

        // Paths
        this.paths = {
            users: '/users'
        }

        // Database connection
        this.connectDB()

        // JSON parsing
        this.app.use(express.json())

        // Routes
        this.routes()
    }

    async connectDB() {
        try {
            await database.authenticate()
            console.log('Database connected')
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }

        // Sync models
        await User.sync({force: false})
        console.log("All models were synchronized successfully.")
    }

    routes() {
        this.app.use(this.paths.users, require("./routes/user.routes"));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

module.exports = Server