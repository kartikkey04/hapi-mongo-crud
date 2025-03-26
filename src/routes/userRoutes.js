const userController = require('../controllers/userController');
const userSchema = require('../validations/userValidation');

module.exports = [
    {
        method: 'POST',
        path: '/users',
        options: {
            validate: {
                payload: userSchema.create,
                failAction: (request, h, error) => error
            }
        },
        handler: userController.createUser
    },
    {
        method: 'GET',
        path: '/users',
        handler: userController.getUsers
    },
    {
        method: 'GET',
        path: '/users/{id}',
        options: {
            validate: {
                params: userSchema.idParam
            }
        },
        handler: userController.getUserById
    },
    {
        method: 'PUT',
        path: '/users/{id}',
        options: {
            validate: {
                params: userSchema.idParam,
                payload: userSchema.update
            }
        },
        handler: userController.updateUser
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        options: {
            validate: {
                params: userSchema.idParam
            }
        },
        handler: userController.deleteUser
    }
];
