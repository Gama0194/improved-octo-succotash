const sequelize = require('../config/connection');
const seedTrip = require('./tripData');
const seedUser = require('./userData');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedTrip();
  await seedUser();
  process.exit(0);
};
seedAll();