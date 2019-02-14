let express = require('express');
let router = express.Router();
let {
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/comments-controller');
let {
  isAdmin
} = require('../utils/validate-user');

/**
 * @typedef Comment
 * @property {id} new.required
 * @property {string} title.required
 * @property {content} content.required
 * @property {id} author.required
 */

/**
 * @route POST /api/comments
 * @group Comments - Operations about comments
 * @param {id} new.required
 * @param {string} title.required
 * @param {content} content.required
 * @param {id} author.required
 * @returns {object} 200 - An array of event that's been added
 * @returns {Error} - Unexpected error
 */
router.route('/')
  .post(isAdmin, createComment);

/**
 * @route PUT /api/comments/:id
 * @group Comments - Operations about comments
 * @param {id} id - id to update comment
 * @returns {object} 200 - An array of id's new updadeted
 * @returns {Error} - Unexpected error
 */
/**
 * @route DELETE /api/comments/:id
 * @group Comments - Operations about comments
 * @param {id} id - id to delete comment
 * @returns {object} 200 - New deleted
 * @returns {Error} - Unexpected error
 */
router.route('/:id')
  .put(isAdmin, updateComment)
  .delete(isAdmin, deleteComment);

module.exports = router;