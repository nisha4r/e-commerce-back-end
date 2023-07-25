const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // includes product id, product_name, price, stock, category_id
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(db => {
    //when there is no category match found, return error 404 with message.
    if (!db) {
      res.status(404).json({ message: 'Not found any categories' });
      return;
    }
    //successful call
    res.json(db);
  }).catch(error => {
    //return error 500 if there is anyother error
    res.status(500).json(error);
    console.log(error);
  });

});

router.get('/:id', (req, res) => {
  // find one category by product `id` value
  // includes following vlaues in the repsonse: product id, product_name, price, stock, category_id
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }

  }).then(data => {
    //no match found in the requested category
    if (!data) {
      res.status(404).json({ message: 'Requested Category is not found' });
      return;
    }
    //successful match
    res.json(data);
  }).catch(error => {
    //for all other errors
    res.status(500).json(error);
    console.log(error);
  });

});

router.post('/', (req, res) => {
  // create a new category with category name from post request body
  Category.create({

    category_name: req.body.category_name

  }).then(data => {
    //success response with data
    res.json(data);
  }).catch(error => {
    // for all other errors.
    res.status(500).json(error);
    console.log(error);
  });

});

router.put('/:id', (req, res) => {
  // update a category by product `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {
    //No requested category found to update
    if (!data) {
      res.status(404).json({ message: 'Requested Category is not found' });
      return;
    }

    //success response
    res.json(data);
  }).catch(error => {
    // for all other errors
    res.status(500).json(error);
    console.log(error);
  });

});

router.delete('/:id', (req, res) => {
  // delete a category by product `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    //no requested category found
    if (!data) {
      res.status(404).json({ message: 'Requested Category is not found' });
      return;
    }
    //successful response
    res.json(data);
  }).catch(error => {
    // for all other  errors.
    res.status(500).json(error);
    console.log(error);
  });

});

module.exports = router;
