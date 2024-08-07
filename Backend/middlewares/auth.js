require('dotenv').config();
const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Jelentkezz be!' });
    }
    jwt.verify(token, process.env.SECRET_KEY, {}, (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ message: 'Nincs jogod a következőre!' });
      } else {
        if (decodedToken.exp - Math.floor(Date.now() / 1000) <= 1200) {
          const newToken = jwt.sign({ id: decodedToken.id }, process.env.SECRET_KEY, {
            expiresIn: '1h',
          });
          res.setHeader('Authorization', `Bearer ${newToken}`);
        }
        req.token = decodedToken;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { userAuth };
