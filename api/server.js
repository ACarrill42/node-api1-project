// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');
const app = express();

app.use(express.json());

app.get('/api/users', (req,res) => {
  if (User.find === '') {
    res.status(500).json({message: 'The users info could not be retrieved'})
  }else {
    const user = User.find();
    res.json(user);    
  };
});

app.get('/api/users/:id', (req, res) => {
  if(User.findById.id === '') {
    res.status(404).json({message: 'The user with the specified ID does not exist'});
  }else if(User.findById.id === 1) {
  const { id } = req.params;

  const singleUser = User.findById(id);
  res.json(singleUser);
  } else {
    res.status(500).json({message: 'The user info could not be retrieved'});
  }
});

app.post('/api/users', (req, res) => {
  const data = req.body;
  if(User.insert.name === '', User.insert.bio === '') {
    res.status(400).json({message: 'Please provide name and bio for the user'});
  }else if(User.insert.name === 'foo', User.insert.bio === 'bar'){
    const newUser = User.insert(data); 
    res.status(201).json(newUser);   
  }else{
    res.status(500).json({message:'There was an error while saving the user to the database'});
  };
});

app.delete('/api/users/:id', (req,res) => {
  const {id} = req.params;

  const removeUser = User.remove(id);
  res.json(removeUser);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const updateUser = User.update(id)
  res.json(updateUser);
})

module.exports = app; // EXPORT YOUR SERVER instead of {}
