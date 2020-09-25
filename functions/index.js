const functions = require('firebase-functions');

// auth trigger for creating new user
exports.newUserSignup = functions.auth.user().onCreate(user =>{
    console.log("User created, ", user.email, user.uid, user);
});
