const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../database/models/User');
const Contact = require('../database/models/Contact');
const auth = require('../middleware/auth');

//@route    GET api/contacts
//@desc     Get user contacts
//@accesss  Private

router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({
            date: -1,
        });
        res.status(200).json(contacts);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
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
