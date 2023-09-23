import mongoose from 'mongoose';
import Lawyer from '../../models/lawyermodel.tsx';
import Client from '../../models/clientmodel.tsx';


export async function insertLawyer(dataToInsert : {
  username: String,
  password: String,
  name: String,
  contact: Number,
  profilepic: String,
  specialisation: Array<String>,
  location: String,
  experience: Number,
  description: String,
  education: String,
  probono: Number,
  price: Number,
  rating: Number,
  numberratings: Number,
  languages: String,
}) {
  try {
    mongoose.connect(
      'mongodb+srv://adityaprabhu1290:1234@cluster0.rikhjaq.mongodb.net/sih-2023'
    );
    console.log('Connected to MongoDB');
    console.log('Inserting data');

    const result = await Lawyer.insertMany(dataToInsert);
    console.log(`${result.length} documents inserted`);
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function insertClient(dataToInsert : {
  name: String,
  email: String,
  connectedlawyers: Array<String>,
  pricespent: Number,
}) {
  try {
    mongoose.connect(
      'mongodb+srv://adityaprabhu1290:1234@cluster0.rikhjaq.mongodb.net/sih-2023'
    );
    console.log('Connected to MongoDB');
    console.log('Inserting data');

    const result = await Client.insertMany(dataToInsert);
    console.log(`${result.length} documents inserted`);
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getLawyerData(query = {}) {
  try {
    mongoose.connect(
      'mongodb+srv://adityaprabhu1290:1234@cluster0.rikhjaq.mongodb.net/sih-2023'
    );
    console.log('Connected to MongoDB');
    const lawyerData = await Lawyer.find(query);
    const transformedData = lawyerData.map((doc) => ({
      username: doc.username || '', // Add a default value if it's undefined
      password: doc.password || '',
      name: doc.name || '',
      contact: doc.contact || 0, // Add a default value (e.g., 0) if it's undefined
      profilepic: doc.profilepic || '',
      specialisation: doc.specialisation || [],
      location: doc.location || '',
      experience: doc.experience || 0,
      description: doc.description || '',
      education: doc.education || '',
      probono: doc.probono || 0,
      price: doc.price || 0,
      rating: doc.rating || 0,
      numberratings: doc.numberratings || 0,
      languages: doc.languages || '',
    }));

    console.log('Lawyer data:');
    console.log(transformedData);
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    return transformedData;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function getClientData(query = {}) {
  try {
    mongoose.connect(
      'mongodb+srv://adityaprabhu1290:1234@cluster0.rikhjaq.mongodb.net/sih-2023'
    );
    console.log('Connected to MongoDB');
    const clientData = await Client.find(query);
    console.log('Client data:');
    console.log(clientData);
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    return clientData;
  } catch (error) {
    console.error('Error:', error);
  }
}
