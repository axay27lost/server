/**
 * Created by Developer39 on 8/3/2017.
 */
const passport =require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');
const keys =require('../config/key');
const User=mongoose.model('users');

passport.serializeUser(function (user,done) {
    done(null,user.id);
});

passport.deserializeUser(function (id,done) {
    User.findById(id)
        .then(function (user) {
            return done(null,user);
        });
});


passport.use(
    new GoogleStrategy({
            clientID : keys.googleClientID,
            clientSecret : keys.googleClientSecreat,
            callbackURL:'/auth/google/callback',
            proxy:true
        },
        function(accessToken, refreshToken, profile,done) {

            User.findOne({googleId : profile.id  })
                .then(function(existingUser){
                    if(existingUser)
                    {
                        done(null,existingUser);
                    }
                    else
                    {
                        new User({ googleId : profile.id })
                            .save()
                        .then(function (user) {
                            return done(null,user);
                        });
                    }
            })
        }
    )
);
