const router = require('express').Router();
// import all the routes 
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes); // categories api routes
router.use('/products', productRoutes);//  products api routes
router.use('/tags', tagRoutes); //tagds api routes

module.exports = router;
