var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('./models/User');

// Create first user
User.findOrCreate({
  where: {id: '1'},
  defaults:{id: '1', name: 'hugo', password: 'test'},
});

// Authentification
passport.use(new LocalStrategy(async (username, password, done) => {
  console.info('Connection with username: ', username);
  // Check if user exists
  const user = await User.findOne({ where: { name: username, password }});
  if (user) {
    console.info('User found !', username);
    return done(null, user.get({ plain: true }));
  }
  console.info('Wrong username or password');

  return done(null, false, { message: 'Wrong username or password' });
}))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  const user = await User.findByPk(userId);
  if (user) {
    done(null, user);
  } else {
    done('User not found', null);
  }
});

module.exports = passport;
