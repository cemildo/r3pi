import  express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/basket/add/null');
});

export default router;
