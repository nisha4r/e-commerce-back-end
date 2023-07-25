const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // response includes id, product_name, price, stock, category_id
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(db => {
    //When no tags found in the backend.
    if (!db) {
      res.status(404).json({ message: 'Not found any tags' });
      return;
    }
    //successful response.
    res.json(db);
  }).catch(error => {
    //for all other errors.
    res.status(500).json(error);
    console.log(error);
  });

});

//findby Tag id
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // response includes id, product_name, price, stock, category_id
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }

  }).then(data => {
    //When requested tag id is not found in the backend.
    if (!data) {
      res.status(404).json({ message: 'Requested Tag is not found' });
      return;
    }
    //successful response.
    res.json(data);
  }).catch(error => {
    //for all other errors
    res.status(500).json(error);
    console.log(error);
  });

});

//create new tag
router.post('/', (req, res) => {
  // create a new tag using tag_name from the request body.
  Tag.create({

    tag_name: req.body.tag_name

  }).then(data => {
    //successful response.
    res.json(data);
  }).catch(error => {
    //for all other errors.
    res.status(500).json(error);
    console.log(error);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by tag `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {

    //when requested Tag id is not found.
    if (!data) {
      res.status(404).json({ message: 'Requested Tag is not found' });
      return;
    }
    //successful response.
    res.json(data);
  }).catch(error => {
    //for all other errors
    res.status(500).json(error);
    console.log(error);
  });

});

// Delete Tag by Tag id.
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
 Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    //When requested is not found.
    if (!data) {
      res.status(404).json({ message: 'Requested Tag is not found' });
      return;
    }
    // successful response.
    res.json(data);
  }).catch(error => {
    // for all other errors.
    res.status(500).json(error);
    console.log(error);
  });

});

module.exports = router;
