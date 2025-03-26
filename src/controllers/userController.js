const User = require('../models/User');

// Create User
const createUser = async(req, h) => {
    try{
        const {name, email, age} = req.payload;
        const user = new User({name, email, age});
        const savedUser = await user.save();
        return h.response(savedUser).code(201); 
    }catch(error){
        return h.response({error: error.message}).code(500);
    }
};

// Get All Users
const getUsers = async(req, h) =>{
    try{
        const users = await User.find();
        return h.response(users).code(200);
    }catch(error){
        return h.response({error: error.message}).code(500);
    }
};

// Get Single User
const getUserById = async(req, h) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return h.response({message: 'User not found'}).code(404);
        return h.response(user).code(200);
    }catch(error){
        return h.response({error: error.message}).code(500);
    }
}


//Update User
const updateUser = async(req,h)=>{
    try{

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.payload,
            {new: true}
        );

        if(!updatedUser) return h.response({message: 'User not found'}).code(404);
        return h.response(updatedUser).code(200);

    }catch(error){
        return h.response({error: error.message}).code(500);
    }
}

// Delete User
const deleteUser = async(req, h)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(
            req.params.id,
            req.payload,
            {new: true}
        );

        if(!deletedUser) return h.response({message: 'User not found'}).code(404);
        return h.response({message: "User Deleted"}).code(200);

    }catch(error){
        return h.response({error: error.message}).code(500);
    }
}

module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUser,
    updateUser
}