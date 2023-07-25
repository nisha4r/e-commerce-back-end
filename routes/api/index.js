const router = require('express').Router();
// import all the routes 
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes); // categories api route
router.use('/products', productRoutes);//  product api routes
router.use('/tags', tagRoutes); //tag api routes

module.exports = router;
