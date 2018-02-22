const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0')
const strategy = require(`../strategy.js`);

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret:'IHaveNoIdeaWhatImDoing',
    resave:false,
    saveUninitialized:false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser(function (user, done) {
    const{id, first, last} = user
    return {
        id:id||'',
        first: first||'',
        last:last || '',
        picture:'https://robohash.org/me'
    }
});

passport.deserializeUser( (obj, done) => {
    console.log("deserialize");
    done(null, obj);
});

app.get('api/login', passport.authenticate('auth0',{
    successRedirect:'/dash',
    failureRedirect:'/auth',
    failureFlash: true
}));


const port = 3005;
app.listen(port,()=> {console.log(`"Asuhh dudee"-Port ${port}`)});