import mongoose from 'mongoose';
import express from 'express';
import Lawyer from './src/models/lawyermodel.tsx';
import Client from './src/models/clientmodel.tsx';

const app = express();
const server = http.createServer(app);

async function insertLawyer(dataToInsert) {
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

async function insertClient(dataToInsert) {
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

async function getLawyerData(query = {}) {
  try {
    mongoose.connect(
      'mongodb+srv://adityaprabhu1290:1234@cluster0.rikhjaq.mongodb.net/sih-2023'
    );
    console.log('Connected to MongoDB');
    const lawyerData = await Lawyer.find(query);
    console.log('Lawyer data:');
    console.log(lawyerData);
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getClientData(query = {}) {
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
  } catch (error) {
    console.error('Error:', error);
  }
}
