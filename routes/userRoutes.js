const express = require('express');
const router = express.Router();


let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

router.get('/', (req, res) => {
  res.json({ users });
});


router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    res.json({ user });
  }
});


router.post('/', (req, res) => {
  const data = req.body;
  if (!data || !data.name || !data.email) {
    res.status(400).json({ error: 'Missing name or email in request data' });
  } else {
    const newUser = {
      id: users.length + 1,
      name: data.name,
      email: data.email,
    };
    users.push(newUser);
    res.status(201).json({ user: newUser });
  }
});


router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const data = req.body;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ error: 'User not found' });
  } else {
    if (data.name) {
      user.name = data.name;
    }
    if (data.email) {
      user.email = data.email;
    }
    res.json({ user });
  }
});


router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    res.status(404).json({ error: 'User not found' });
  } else {
    users.splice(index, 1);
    res.json({ result: true });
  }
});

module.exports = router;
