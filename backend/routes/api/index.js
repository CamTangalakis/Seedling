const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const projectRouter = require('./projects.js')
// const imageRouter = require('./images.js')
const fundingRouter = require('./fundings.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/projects', projectRouter);
// router.use('/images', imageRouter);
router.use('/fundings', fundingRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo User'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
      return res.json(req.user);
    }
  );

  router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
      return res.json(req.user);
    }
  );

module.exports = router;

// fetch('/api/test', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `QK1asMXo-LJzY4bMRPP9SC423TRn66wUYj3g`
//     },
//     body: JSON.stringify({ hello: 'world' })
//   }).then(res => res.json()).then(data => console.log(data));
