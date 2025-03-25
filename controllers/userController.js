const User = require('../models/User');

// Create User
const createUser = async(req,res) => {
    try{
        const {name, email, age} = req.payload;
        const user = new User({name, email, age});
        const savedUser = await user.save();
        return h.res(savedUser).code(201); 
    }catch(error){
        return h.res({error: error.message}).code(500);
    }
};

// Get All Users
const getUsers = async(req, res) =>{
    try{
        const users = await User.find();
        return h.res(users).code(200);
    }catch(error){
        return h.res({error: error.message}).code(500);
    }
};

// Get Single User
const getUserById = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return h.res({message: 'User not found'}).code(404);
        return h.res(user).code(200);
    }catch(error){
        return h.res({error: error.message}).code(500);
    }
}


//Update User
const updateUser = async(req, res)=>{
    try{

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.payload,
            {new: true}
        );

        if(!updatedUser) return h.res({message: 'User not found'}).code(404);
        return h.res(updatedUser).code(200);

    }catch(error){
        return h.res({error: error.message}).code(500);
    }
}

// Delete User
const deleteUser = async(req, res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(
            req.params.id,
            req.payload,
            {new: true}
        );

        if(!deletedUser) return h.res({message: 'User not found'}).code(404);
        return h.res({message: "User Deleted"}).code(200);

    }catch(error){
        return h.res({error: error.message}).code(500);
    }
}

module.exports = {
    createUser,
    getUserById,
    getUsers,
    deleteUser,
    updateUser
}