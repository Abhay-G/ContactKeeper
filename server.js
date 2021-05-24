const express = require('express');
const connectDB = require('./database/db');

const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

//Home route
app.get('/', (req, res) => res.json({ msg: 'Welcome to the Contact API' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

////Connect Database and after that start server
const PORT = process.env.PORT || 5000;
connectDB().then(() =>
    app.listen(PORT, () => console.log(`Server started on ${PORT}`))
);
