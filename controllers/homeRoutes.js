const router = require('express').Router();
const { Trip, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const tripData = await Trip.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const trips = tripData.map((trip) => trip.get({ plain: true }));
  
      res.json(tripData)
    //   res.render('homepage', { 
    //     trips, 
    //     logged_in: req.session.logged_in 
    //   });
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;