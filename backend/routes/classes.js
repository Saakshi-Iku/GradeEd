const router = require('express').Router();
let Class = require('../models/classModel');

router.route('/').get((req, res) => {
  Class.find()
    .then(classes => res.json(classes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;