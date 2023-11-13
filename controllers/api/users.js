const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

// create the User once sign-up button is clicked
async function create(req, res) {
   try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
   } catch (err) {
    res.status(400).json(err);
   }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        res.json(createJWT(user))
    } catch (err) {
        res.status(400).json('Bad Login')
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
}

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }