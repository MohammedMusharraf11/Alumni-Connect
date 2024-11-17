const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initSocket } = require('./socket/socket');
const AuthRouter = require('./Routes/AuthRouter');
const AuthAlumniRouter = require('./Routes/AuthAlumniRoutes');
const uploadRoute = require('./Routes/routeUpload');
const eventRouter = require('./Routes/eventRoutes');
const messageRoutes = require('./Routes/messageRoutes');
const userRoutes = require('./Routes/userRoutes');
const connectCloudinary = require('./utils/cloudinary')
const AdminRoutes = require('./Routes/AdminRoutes')
require('./Models/db');

connectCloudinary();
const app = express();
const server = http.createServer(app); // Create HTTP server
initSocket(server); // Initialize socket events

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/auth', AuthRouter);
app.use('/api/alumni', AuthAlumniRouter);
app.use('/api/student/upload', uploadRoute);
app.use('/api/alumni/upload', uploadRoute);
app.use('/api/events', eventRouter);
app.use('/api/messages', messageRoutes);
app.use('/api/user', userRoutes);
app.use('/admin',AdminRoutes);


// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
