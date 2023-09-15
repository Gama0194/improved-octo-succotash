const { Trip } = require('../models')


const tripsData = [
  {
    id: 1,
    country: "USA",
    date_created: "2023-09-14T10:00:00Z",
    user_id: 101
  },
  {
    id: 2,
    country: "Canada",
    date_created: "2023-09-15T11:30:00Z",
    user_id: 102
  },
  {
    id: 3,
    country: "France",
    date_created: "2023-09-16T09:15:00Z",
    user_id: 103
  },
  {
    id: 4,
    country: "Italy",
    date_created: "2023-09-17T14:45:00Z",
    user_id: 104
  },
  {
    id: 5,
    country: "Japan",
    date_created: "2023-09-18T08:20:00Z",
    user_id: 105
  },
  {
    id: 6,
    country: "Australia",
    date_created: "2023-09-19T16:00:00Z",
    user_id: 106
  },
  {
    id: 7,
    country: "Germany",
    date_created: "2023-09-20T12:10:00Z",
    user_id: 107
  },
  {
    id: 8,
    country: "Spain",
    date_created: "2023-09-21T07:55:00Z",
    user_id: 108
  },
  {
    id: 9,
    country: "Brazil",
    date_created: "2023-09-22T18:30:00Z",
    user_id: 109
  },
  {
    id: 10,
    country: "India",
    date_created: "2023-09-23T13:25:00Z",
    user_id: 110
  }
];
const seedTrip = () => Trip.bulkCreate(tripsData)

module.exports = seedTrip