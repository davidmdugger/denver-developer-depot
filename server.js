const express = require('express'),
      app = express(),
      mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const users = require('./routes/api/users'),
      profile = require('./routes/api/profile'),
      posts = require('./routes/api/posts');

// DB config
const db = require('./config/keys').mongoURI;

// CONNECT TO MONGODB
mongoose.connect(db)
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.log(err));

// use the routes imported
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Server is running on port ${port}`));