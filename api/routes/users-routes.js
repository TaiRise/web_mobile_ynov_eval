let express = require('express');
let router = express.Router();
let {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/users-controller');
let {
  isAdmin,
  isCurrentUser
} = require('../utils/validate-user');
/**
 * @typedef User
 * @property {string} name.required
 * @property {string} firstname
 * @property {string} mail.required
 * @property {string} password.required
 * @property {string} admin
 */

/**
 * @route GET /api/users
 * @group Users - Operations about users
 * @returns {object} 200 - An array of all users
 * @returns {Error} - Unexpected error
 */
/**
 * @route POST /api/users
 * @group Users - Operations about users
 * @param {string} name.required - name of user
 * @param {string} firstname - firstname of user
 * @param {string} mail.required - mail of user
 * @param {string} password.required - password of user
 * @param {boolean} admin - admin or not
 * @returns {object} 200 - An array of event that's been added
 * @returns {Error} - Unexpected error
 */
router.route('/')
  .get(getAllUsers)
  .post(createUser);

/**
 * @route GET /api/users/:id
 * @group Users - Operations about users
 * @param {id} id - id to get user
 * @returns {object} 200 - An array of id's user
 * @returns {Error} - Unexpected error
 */
/**
 * @route PUT /api/users/:id
 * @group Users - Operations about users
 * @param {id} id - id to update user
 * @returns {object} 200 - An array of id's user updadeted
 * @returns {Error} - Unexpected error
 */
/**
 * @route DELETE /api/users/:id
 * @group Users - Operations about users
 * @param {id} id - id to delete user
 * @returns {object} 200 - user deleted
 * @returns {Error} - Unexpected error
 */
router.route('/:id')
  .get(isAdmin, getUserById)
  .put(isCurrentUser, updateUser)
  .delete(isCurrentUser, deleteUser)

module.exports = router;