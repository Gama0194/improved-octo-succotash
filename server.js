const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

const locationRoutes = require('./routes/locationRoutes');
app.use('/locations', locationRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});