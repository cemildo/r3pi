import express from 'express';
import { Sale } from '../models';
import Factory from '../helpers/objectFactory';
const router = express.Router();


router.get('/reset', function(req, res) {
  const sale = Sale.instance;
  sale.setItems([]);
  res.render('index', { title: 'Online Order', sale });

});

router.get('/add/:name', function(req, res) {
  const sale = Sale.instance;
  const obj = Factory.getInstance(req.params.name);

  if(typeof obj !== 'object') {
    return res.render('index', { title: 'Online Order', sale, error: obj });
  }
  sale.addItem(obj);
  res.render('index', { title: 'Online Order', sale });

});



export default router;
