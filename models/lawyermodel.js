import mongoose from 'mongoose';

const lawyerschema= new mongoose.Schema({
    usernaname: String,
    password: String,
    name: String,
    contact: Number,
    specialisation: Array,
});

export default mongoose.model('Lawyer',lawyerschema);
