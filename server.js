const express = require('express');
const handlebars = require("handlebars");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const locationRoutes = require('./routes/locationRoutes');
app.use('/locations', locationRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});

// Handlebars
const template = handlebars.compile("Name: {{name}}");
console.log(template({ name: "Travel Buddy" }));