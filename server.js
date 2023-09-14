const express = require('express');
const handlebars = require("handlebars");
// import { engine } from 'express-handlebars';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Setting Handlebars.js as the default template engine.
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.get('/', (req, res) => {
//     res.render('home');
// });

const locationRoutes = require('./routes/locationRoutes');
app.use('/locations', locationRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handlebars
const template = handlebars.compile("Name: {{name}}");
console.log(template({ name: "Travel Buddy" }));