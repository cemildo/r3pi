import  express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Online Order' });
  res.redirect('/basket/add/start');
});

export default router;
