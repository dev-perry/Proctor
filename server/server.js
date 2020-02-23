require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const port = process.env.PORT || 4000;

//Get the files that specify the routes we're using
const auth = require('./routes/auth');
const course = require('./routes/course');
const assignment = require('./routes/assignment');

//MIDDLEWARE - data requests passes through these packages in order to be read
app.use(bodyParser.urlencoded({extended: false})); //reading incoming
app.use(bodyParser.json()); //packaging outgoing
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
})); //This allows cross-origin requests from the domain our app is stored on and makes it so the browser holds the cookie

//Sessions
app.use(session({
  secret: process.env.SECRET_KEY, //will likely need to be environment variable
  store: new MongoStore({mongooseConnection: dbConnection}),
  resave: false, //this is a default requirement
  saveUninitialized: false //default requirement
}));

//Passport
app.use(passport.initialize());
app.use(passport.session()) //helps to trigger deserializeUser

//Routes that the client needs to use to access server Routes
app.use('/authenticate', auth);
app.use('/catalog', course);
app.use('/assignment', assignment);

app.listen(port, () => {
    console.log('Connected to port ' + port)
});
