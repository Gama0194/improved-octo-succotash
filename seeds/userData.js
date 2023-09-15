const { User } = require('../models')


const usersData = [
  {
    id: 101,
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    id: 102,
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    id: 103,
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345"
  }
];

const seedUser = () => User.bulkCreate(usersData)

module.exports = seedUser