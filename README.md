Denver Devoloper Depot (DDD) is a web app to connect Denver's Developers with each other to share their experience, learn new skills, or just have conversations about technology.

DDD is full stack application using node.js, Express, and mongoDB on the backend, and React on the the frontend.

This code base uses the prettier extension for uniform code.

# Backend Dependencies

The server runs on port 8000.

This project uses Babel to transpile ES6 to ES5.

Express.js is used as the backend framework.

Mongoose is used for data modeling.

Passport.js is used for user authentication.

JSON Web Tokens is used to generate the token for Passport-jwt to securely send and receive JSON data between the client and the server.

Passport-jwt is used to protect the backend routes.

bcryptjs is used for password encryption and decryption.

Validator is used for server side validation

# Client Dependencies
The client runs on port 3000.

This project uses React for frontend rendering.

Redux is used to manage state.

# Get it running
Feel free to clone the project. If you do clone the project and want to use mongoDB, you will need to create a config folder and keys file for your database URI and the secret key. For example:

config/keys.js

module.exports = {
  mongoURI: YOUR_DB_URI,
  secretOrKey: YOUR_SECRET
};

Your connection to the server and db are connected via this line in the server.js file:

// DB config
const db = require("./config/keys").mongoURI;

Client runs on port 3000; server on 8000.

Concurrently is used to run both the server and the client with one command:

npm run dev

See the server package.json for scripts to run just the server or the client.
