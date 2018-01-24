import express from 'express';

const router = express.Router();

/* GET index page. */
//router.get('/', (req, res) => {
//  res.render('pages/index', {
//    title: 'crypto market watcher'
//  });
//});

/* GET Register page. */
router.get('/', (req, res) => {
   res.render('pages/signup', {
      title: 'Sign Up'
   });
});

/* GET login page. */
router.get('/login', (req, res) => {
   res.render('login', {
      title: 'User Login'
   });

});

/* GET admin page. */
router.get('/cryptochecker', (req, res) => {
   res.render('cryptocheker', {
      title: 'Market Price'
   });
});

export default router;
