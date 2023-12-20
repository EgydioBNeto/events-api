const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authConfig = { secret: process.env.AUTH_SECRET };

const authConfigs = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "Token not provided" });

  const parts = authHeader.split(" ");

  if (!parts.length === 2)
    return res.status(401).json({ error: "Invalid token" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: "Invalid token" });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userID = decoded.id;
    return next();
  });
};

module.exports = authConfigs;
