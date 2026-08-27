const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // Get authorization header
  const { authorization } = req.headers;

  // Check if token exists
  if (!authorization) {
    return res.status(401).json({
      error: "Authorization token required",
    });
  }

  // Authorization format:
  // Bearer TOKEN
  const token = authorization.split(" ")[1];

  try {
    // Verify token
    const { _id } = jwt.verify(token, process.env.SECRET);

    // Find user
    req.user = await User.findOne({ _id }).select("_id");

    // Continue to controller
    next();
  } catch (error) {
    console.log(error);

    res.status(401).json({
      error: "Request is not authorized",
    });
  }
};

module.exports = requireAuth;