const express = require('express');
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all user contacts
//@accesss  Private

router.get('/', (req, res) => {
  res.send('Get all contacts of yours');
});

//@route    POST api/contacts
//@desc     Add new contact
//@accesss  Private

router.post('/', (req, res) => {
  res.send('Add contact');
});

//@route    PUT api/contacts/:id
//@desc     Update Contact
//@accesss  Private

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//@route    PUT api/contacts/:id
//@desc     Delete Contact
//@accesss  Private

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
