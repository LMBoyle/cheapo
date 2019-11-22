// Dependencies ===================================================================================

const express  = require('express')
const mongoose = require( 'mongoose');
const routes = require("./routes");
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const globalErrHandler = require('./controllers/errorController')

dotenv.config({
  path: './config.env'
});

// Express ========================================================================================

const app = express();
const PORT = process.env.PORT || 3009

app.use(express.urlencoded({ extended: true }));

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
  limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

app.use(globalErrHandler);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Authentication =================================================================================

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION!!! shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const database = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Database =======================================================================================

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/cheapo";
//===================DB Connection HERE==================
mongoose.connect(MONGODB_URI, { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('DB connection Successfully!');
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});

// Routes =========================================================================================

app.use(routes);

// Listen =========================================================================================

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});

  //!database is not created yet, this is just the code for it. np