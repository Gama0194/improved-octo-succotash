const express = require('express');
const router = express.Router();


let locations = [
    {id: 1, name: 'Eiffel Tower', description: 'Iconic landmark in Paris, France' },
    {id: 2, name: 'Statue of Liberty', description: 'Iconic statue in New York City, USA'},
];
router.get('/', (req, res) => {
    res.json({ locations });
});

router.get('/:id', (req, res) => {
    const locationId = parseInt(req.params.id);
    const location = locations.find((loc) => loc.id === locationId);

    if (!location) {
        res.status(404).json({ error: ' Location not found' });
    } else {
        res.json({ location });
    }
});


router.post('/', (req, res) => {
    const data = req.body;
    if (!data || !data.name || !data.description) {
      res.status(400).json({ error: 'Missing name or description in request data' });
    } else {
      const newLocation = {
        id: locations.length + 1,
        name: data.name,
        description: data.description,
      };
      locations.push(newLocation);
      res.status(201).json({ location: newLocation });
    }
});


router.put('/:id', (req,res) => {
    const locationId = parseInt(req.params.id);
    const data = req.body;
    const location = locations.find((loc) => loc.id === locationId);

    if (!location) {
        res.status(404).json({ error: 'Location not found' });
      } else {
        if (data.name) {
          location.name = data.name;
        }
        if (data.description) {
          location.description = data.description;
        }
        res.json({ location });
      }
});

router.delete('/:id', (req,res) => {
    const locationId = parseInt(req.params.id);
    const index = locations.findIndex((loc) => loc.id === locationId);

    if (index === -1) {
        res.status(404).json({ error: 'Location not found' });
    } else {
        locations.splice(index, 1);
        res.json({ result: true});
    }
});

module.exports= router;