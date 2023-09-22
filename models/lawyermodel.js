import mongoose from 'mongoose';

const lawyerschema= new mongoose.Schema({
    usernaname: String,
    password: String,
    name: String,
    contact: Number,
    profilepic: String,
    specialisation: Array,
    location: String,
    experience: String,

});

export default mongoose.model('Lawyer',lawyerschema);
