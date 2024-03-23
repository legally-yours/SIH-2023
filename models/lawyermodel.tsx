import mongoose from 'mongoose';

const lawyerschema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  contact: Number,
  profilepic: String,
  specialisation: Array,
  location: String,
  experience: Number,
  description: String,
  education: String,
  probono: Number,
  price: Number,
  rating: Number,
  numberratings: Number,
  languages: String,
});

export default mongoose.model('Lawyer', lawyerschema);
