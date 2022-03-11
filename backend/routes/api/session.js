const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

//login
router.post('/', asyncHandler(async (req, res, next) => {
      const { credential, password } = req.body;

      const user = await User.login({ credential, password });

      if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
      }

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
  );

//log out
router.delete('/', (_req, res) => {
    res.clearCookie('token')
    return res.json({message: "success"})
})

router.get('/', restoreUser, (req, res) => {
      const { user } = req;
      if (user) {
        return res.json({
          user: user.toSafeObject()
        });
      } else return res.json({});
    }
  );

module.exports = router;

//     JpOccZVL-aEgyllFlhJxYvZnmXWesobFkhRE

// fetch('/api/session', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `9w83mS4J-Ve7bGFMsIxAIHNumEWZQVSwzTRY`
//     },
//     body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
//   }).then(res => res.json()).then(data => console.log(data));

// fetch('/api/session', {
//     method: 'DELETE',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `9w83mS4J-Ve7bGFMsIxAIHNumEWZQVSwzTRY`
//     }
//   }).then(res => res.json()).then(data => console.log(data));
//   fetch('/api/session', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `9w83mS4J-Ve7bGFMsIxAIHNumEWZQVSwzTRY`
//     },
//     body: JSON.stringify({ credential: 'demo@user.io', password: 'whatejbesf' })
//   }).then(res => res.json()).then(data => console.log(data));
