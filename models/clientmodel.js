import mongoose from 'mongoose';

const clientschema = new mongoose.Schema({
  name: String,
  email: String,
  connectedlawyers: Array,
  pricespent: Number,
});

export default mongoose.model('Client', clientschema);
