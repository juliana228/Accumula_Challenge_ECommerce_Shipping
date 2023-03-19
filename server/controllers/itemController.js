const { Items } = require('../models/itemModel');

const itemController = {};

itemController.getAllItems = async (req, res, next) => {
  try {
    //assign res.locals.allItems to the result of requesting all data from our NoSQL database
    res.locals.allItems = await Items.find();
    return next();
  } catch (err) {
    return next({
      log: 'Error thrown in getAllItems middleware',
      message: { err: 'Error getting all items' },
    });
  }
};

module.exports = itemController;
