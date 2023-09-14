const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require("handlebars");
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers }); // Maybe take this out?

app.use(express.json());

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

  // Setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// Maybe the content below doesn't belong here
const locationRoutes = require('./routes/locationRoutes');
app.use('/locations', locationRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.render('layouts/main', { title: 'My App', name: 'Travel Buddy' });
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
// Maybe the content above doesn't belong here


// Handlebars
const template = handlebars.compile("Name: {{name}}");
console.log(template({ name: "Travel Buddy" }));