import express from 'express';

const router = express.Router();

/* GET index page. */
<<<<<<< HEAD
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
=======
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
>>>>>>> 7d358f44f4823504c539372b7675f01696d8e915
});

export default router;
