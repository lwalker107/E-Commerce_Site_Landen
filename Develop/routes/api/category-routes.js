const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [ Product ]
  }).then((categoryData) => {
    res.json(categoryData);
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [ Product ]
  }).then((categoryData) => {
    res.json(categoryData);
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    Category_name: req.body.category_name,
  }).then((newCategory) => {
    res.json(newCategory);
  }).catch((err) => {
    res.json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    Category_name: req.body.category_name,
  }, {
    where: {
      id: req.params.id,
    },
  }).then((updatedCategory) => {
    res.json(updatedCategory);
  }).catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deletedCategory) => {
    res.json(deletedCategory);
  }).catch((err) => res.json(err));
});

module.exports = router;
