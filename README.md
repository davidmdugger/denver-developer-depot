Denver Devoloper Depot (DDD) is a social networking web app to connect Denver's Developers.

It was built from scratch using node.js, Express, mongoDB, and React with Redux for state management.

Version one is complete and can be viewed at: https://lovely-carlsbad-caverns-38357.herokuapp.com/

Please note, that the server will need to be rebooted when you first access the app. Thus, it may take up to 60 seconds to load.

This code base uses the prettier extension for uniform code.

# Backend Dependencies

The server runs on port 8000 if you clone the project.

This project uses Babel to transpile ES6 to ES5.

Express.js is used as the backend framework.

Mongoose is used for data modeling.

Passport.js is used for user authentication.

JSON Web Tokens is used to generate the token for Passport-jwt to securely send and receive JSON data between the client and the server.

Passport-jwt is used to protect the backend routes.

bcryptjs is used for password encryption and decryption.

Validator is used for server side validation

# Client Dependencies

The client runs on port 3000 if you clone the project.

React is used for frontend rendering.

Redux is used to manage app state.

Axios is used for AJAX requests, and common header injection.

jwt-decode is used to decode the JSON Web Token on the client to extract the user details.

# Get it running

Feel free to clone, or download, the project. If you do clone the project and want to use mongoDB, you will need to create a config folder and keys file for your database URI and the secret key. For example:

config/keys.js

```module.exports = {
mongoURI: YOUR_DB_URI,
secretOrKey: YOUR_SECRET
};
```

Your connection to the server and db are connected via this line in the server.js file:

// DB config
const db = require("./config/keys").mongoURI;

Client runs on port 3000; server on 8000.

Concurrently is used to run both the server and the client with one command:

npm run dev

See the server package.json for scripts to run just the server or the client.
