require('dotenv').config();
const Hapi = require('@hapi/hapi');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const startServer = async() => {
    await connectDB();

    const server = Hapi.server({
        port: process.env.PORT,
        host: 'localhost'
    });

    server.route(userRoutes);
    await server.start();
    console.log('Server is running....')
}

process.on('unhandledRejection', (err)=>{
    console.log(err);
    process.exit(1)
});

startServer();