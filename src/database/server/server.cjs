const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');




const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors()); 

mongoose.connect('mongodb+srv://rohitsinha2022:jaSqIFBoSo3tQPD4@userdata.nr0iftg.mongodb.net/UserData?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const lawyerSchema = new mongoose.Schema({
  email: String,
  phoneNumber: String,
  username: String,
  password: String,
  confirmPassword: String,
  location: String,
  specialization: String,
  aadharNumber: String,
});


const Lawyer = mongoose.model('Lawyer', lawyerSchema);

app.post('/api/lawyer/signup', async (req, res) => {
  const formData = req.body;
  console.log('New formData: ',formData);
  try {
    console.log('Hi IM trying');
    const newLawyer = await Lawyer.create(formData);
    const responseData = {
      _id: newLawyer._id,
      email: newLawyer.email,
      phoneNumber: newLawyer.phoneNumber,
      username: newLawyer.username,
      location: newLawyer.location,
      specialization: newLawyer.specialization,
      aadharNumber: newLawyer.aadharNumber,
    };
    res.status(201).json({ message: 'Signup successful', data: responseData });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
