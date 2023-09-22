import mongoose from 'mongoose';

const clientschema= new mongoose.Schema({
    name: String,
    email: String
});

export default mongoose.model('Client',clientschema);