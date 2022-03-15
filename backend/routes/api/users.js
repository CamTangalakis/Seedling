const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

 //sign up
 router.post(
    '/',
    asyncHandler(async (req, res) => {
      const { email, password, username, profilePic } = req.body;
      const user = await User.signup({ username, email, password, profilePic });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
  );

module.exports = router;
