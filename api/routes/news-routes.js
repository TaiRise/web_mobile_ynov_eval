let express = require('express');
let router = express.Router();
let {
  getAllNews,
  createNew,
  getNewById,
  updateNew,
  deleteNew,
} = require('../controllers/news-controller');
let {
  isAdmin
} = require('../utils/validate-user');

/**
 * @typedef New
 * @property {string} title.required
 * @property {string} content.required
 * @property {id} author.required
 * @property {array} comments
 */

/**
 * @route GET /api/news
 * @group News - Operations about News
 * @returns {object} 200 - An array of all News
 * @returns {Error} - Unexpected error
 */
/**
 * @route POST /api/news
 * @group News - Operations about news
 * @param {string} title.required
 * @param {string} content.required
 * @param {id} author.required
 * @param {array} comments
 * @returns {object} 200 - An array of event that's been added
 * @returns {Error} - Unexpected error
 */
router.route('/')
  .get(getAllNews)
  .post(isAdmin, createNew);

/**
 * @route GET /api/news/:id
 * @group News - Operations about news
 * @param {id} id - id to get new
 * @returns {object} 200 - An array of id's new
 * @returns {Error} - Unexpected error
 */
/**
 * @route PUT /api/news/:id
 * @group News - Operations about news
 * @param {id} id - id to update new
 * @returns {object} 200 - An array of id's new updadeted
 * @returns {Error} - Unexpected error
 */
/**
 * @route DELETE /api/news/:id
 * @group News - Operations about news
 * @param {id} id - id to delete new
 * @returns {object} 200 - New deleted
 * @returns {Error} - Unexpected error
 */
router.route('/:id')
  .get(isAdmin, getNewById)
  .put(isAdmin, updateNew)
  .delete(isAdmin, deleteNew);

module.exports = router;