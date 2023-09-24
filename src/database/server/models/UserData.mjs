import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
    email: String,
    phoneNumber: String,
    username: String,
    password: String,
    confirmPassword: String,
    location: String,
    specialization: String,
    aadharNumber: String,
});

export default mongoose.model('UserData', userDataSchema);
