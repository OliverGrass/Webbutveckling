// index.js

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

var sess = {
  secret: '6iD1Y9Y_rNMmLhNooR_CvkpRMoc5Vl1zgC3BmMRqvy7WC4T7zVHSqvy',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get("env") === "production") {
  sess.cookie.secure = true; // serve secure cookies, requires https
}

app.use(session(sess));

// load environment variables from .env
var dotenv = require("dotenv");
dotenv.config()

// configure passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser( (user, done) => {
  done(null, user);
});

passport.deserializeUser( (user, done) => {
  done(null, user);
});

// routes
var userInViews = require('./middleware/userInViews');
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set path for static assets
app.use(express.static(path.join(__dirname, "public")))

const server = http.listen(process.env.PORT ||3000, function() {
  console.log("listening on *:3000");
});

let messageList = []
let userList = []

io.sockets.on("connection", socket => {
  let ts = Date.now();
  let date_ob = new Date(ts);
  socket.on("username", username => {
    userList.push(username);
    //THIS IS WHAT YOU CHANGE
    //console.log(socket.request.user);
    socket.username = username;
    socket.emit("history", messageList)
    io.emit("is_online", "<span class='clock'>" + date_ob.getHours() + ":" + date_ob.getMinutes() + "</span>🔵 <i>" + socket.username + " joined the chat..</i>");
    io.emit("online_users", userList);
  });

  socket.on("disconnect", username => {
    userList = userList.filter(item => item !== socket.username)
    let ts = Date.now();
    let date_ob = new Date(ts);
    io.emit("is_online", "<span class='clock'>" + date_ob.getHours() + ":" + date_ob.getMinutes() + "</span>🔴 <i>" + socket.username + " left the chat..</i>");
  });

  socket.on("chat_message", message => {
    let ts = Date.now();
    let date_ob = new Date(ts);
    let msg = {
      clock: date_ob.getHours() + ":" + date_ob.getMinutes(),
      username: socket.username,
      message: message
    };
    io.emit("chat_message", msg);
    messageList.push(msg);
  });

  socket.on("user_click", username => {
    console.log(username);
  });
});
