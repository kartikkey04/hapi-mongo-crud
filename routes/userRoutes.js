const userController = require('../controllers/userController');

module.exports = [
    {method: 'POST', path: '/users', handler: userController.createUser},
    {method: 'GET', path: '/users', handler: userController.getUser},
    {method: 'GET', path: '/users/{id}', handler: userController.getUserById},
    {method: 'PUT', path: '/users/{id}', handler: userController.updateUser},
    {method: 'DELETE', path: '/users/{id}', handler: userController.deleteUser}
];