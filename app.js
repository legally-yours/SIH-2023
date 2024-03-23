import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import Lawyer from './models/lawyermodel.js';
import Client from './models/clientmodel.js';

const app = express();
const server = http.createServer(app);

server.listen(3000, function () {
  console.log('Server is running');
});

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

const toadd = [
  {
    username: 'advrakesh001',
    password: 'p@ssw0rd1',
    name: 'Adv. Rakesh Kumar',
    contact: 9876543210,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Civil', 'Criminal'],
    location: 'Delhi',
    experience: 15,
    description:
      'Passionate lawyer with a focus on justice. Highly experienced with notable achievements including the Best Lawyer Award 2020. Fluent in English and Hindi.',
    education: 'LL.B, Delhi University',
    probono: 30,
    price: 2000,
    rating: 4.6,
    numberratings: 200,
    languages: 'English, Hindi',
  },
  {
    username: 'advananya002',
    password: 'p@ssw0rd2',
    name: 'Adv. Ananya Singh',
    contact: 9876543211,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Family', 'Immigration'],
    location: 'Mumbai',
    experience: 12,
    description:
      'Dedicated to serving clients with integrity. A seasoned lawyer with expertise in Family and Immigration law. Proficient in English and Marathi.',
    education: 'LL.M, Mumbai University',
    probono: 25,
    price: 2500,
    rating: 4.7,
    numberratings: 180,
    languages: 'English, Marathi',
  },
  {
    username: 'advmanish003',
    password: 'p@ssw0rd3',
    name: 'Adv. Manish Gupta',
    contact: 9876543212,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Corporate', 'IP'],
    location: 'Bangalore',
    experience: 10,
    description:
      "Expert in corporate law and intellectual property. Recognized in 'Top Lawyers of India' list. Proficient in English and Kannada.",
    education: 'LL.B, National Law School',
    probono: 20,
    price: 1800,
    rating: 4.4,
    numberratings: 250,
    languages: 'English, Kannada',
  },
  {
    username: 'advpriya004',
    password: 'p@ssw0rd4',
    name: 'Adv. Priya Sharma',
    contact: 9876543213,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Criminal', 'Family'],
    location: 'Chandigarh',
    experience: 8,
    description:
      'Committed to ensuring fair representation for every client. Notable success rate in criminal defense cases. Fluent in English and Punjabi.',
    education: 'LL.B, Punjab University',
    probono: 15,
    price: 2200,
    rating: 4.8,
    numberratings: 150,
    languages: 'English, Punjabi',
  },
  {
    username: 'advalok005',
    password: 'p@ssw0rd5',
    name: 'Adv. Alok Tiwari',
    contact: 9876543214,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Civil', 'Employment'],
    location: 'Lucknow',
    experience: 13,
    description:
      "Dedicated to upholding the principles of justice and fairness. Received 'Young Achiever in Law' award. Fluent in English and Hindi.",
    education: 'LL.M, Lucknow University',
    probono: 18,
    price: 1900,
    rating: 4.2,
    numberratings: 220,
    languages: 'English, Hindi',
  },
  {
    username: 'advmaya006',
    password: 'p@ssw0rd6',
    name: 'Adv. Maya Reddy',
    contact: 9876543215,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Real Estate', 'Tax'],
    location: 'Hyderabad',
    experience: 9,
    description:
      'Providing reliable legal counsel to clients in complex real estate matters. Notable settlements in high-value real estate transactions. Fluent in English and Telugu.',
    education: 'LL.B, Osmania University',
    probono: 22,
    price: 2400,
    rating: 4.5,
    numberratings: 180,
    languages: 'English, Telugu',
  },
  {
    username: 'advrajesh007',
    password: 'p@ssw0rd7',
    name: 'Adv. Rajesh Verma',
    contact: 9876543216,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Corporate', 'Criminal'],
    location: 'Kolkata',
    experience: 14,
    description:
      'A seasoned lawyer with extensive experience in corporate and criminal law. Recognized by Legal Excellence Society for outstanding service. Fluent in English and Bengali.',
    education: 'LL.B, Calcutta University',
    probono: 28,
    price: 2300,
    rating: 4.3,
    numberratings: 220,
    languages: 'English, Bengali',
  },
  {
    username: 'advsneha008',
    password: 'p@ssw0rd8',
    name: 'Adv. Sneha Jain',
    contact: 9876543217,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Family', 'Immigration'],
    location: 'Jaipur',
    experience: 11,
    description:
      'Committed to helping families navigate the legal complexities of immigration. Successful representation in complex immigration cases. Fluent in English and Hindi.',
    education: 'LL.M, Rajasthan University',
    probono: 19,
    price: 2100,
    rating: 4.6,
    numberratings: 190,
    languages: 'English, Hindi',
  },
  {
    username: 'advabhinav009',
    password: 'p@ssw0rd9',
    name: 'Adv. Abhinav Singh',
    contact: 9876543218,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Civil', 'IP'],
    location: 'Chennai',
    experience: 7,
    description:
      'Dedicated to providing innovative legal solutions to clients. Recognized for pro bono work in intellectual property law. Fluent in English and Tamil.',
    education: 'LL.B, Madras University',
    probono: 12,
    price: 2600,
    rating: 4.5,
    numberratings: 160,
    languages: 'English, Tamil',
  },
  {
    username: 'advmeera010',
    password: 'p@ssw0rd10',
    name: 'Adv. Meera Patel',
    contact: 9876543219,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Corporate', 'Tax'],
    location: 'Ahmedabad',
    experience: 12,
    description:
      'A results-oriented lawyer focused on delivering optimal outcomes. Successfully represented clients in high-stakes tax litigation. Fluent in English and Gujarati.',
    education: 'LL.M, Gujarat University',
    probono: 17,
    price: 2000,
    rating: 4.3,
    numberratings: 210,
    languages: 'English, Gujarati',
  },
  {
    username: 'advarjun011',
    password: 'p@ssw0rd11',
    name: 'Adv. Arjun Khanna',
    contact: 9876543220,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Criminal', 'Family'],
    location: 'Pune',
    experience: 9,
    description:
      'Committed to justice and ensuring every voice is heard in the legal system. Acknowledged for community service initiatives in legal aid. Fluent in English and Marathi.',
    education: 'LL.B, Pune University',
    probono: 23,
    price: 1800,
    rating: 4.7,
    numberratings: 180,
    languages: 'English, Marathi',
  },
  {
    username: 'advkavita012',
    password: 'p@ssw0rd12',
    name: 'Adv. Kavita Reddy',
    contact: 9876543221,
    profilepic: 'iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAA...',
    specialisation: ['Corporate', 'Tax'],
    location: 'Bangalore',
    experience: 14,
    description:
      "A seasoned professional dedicated to providing top-notch legal services. Awarded 'Legal Luminary of the Year' by Legal Chamber. Fluent in English and Kannada.",
    education: 'LL.M, National Law School',
    probono: 26,
    price: 2700,
    rating: 4.4,
    numberratings: 220,
    languages: 'English, Kannada',
  },
];

insertLawyer(toadd);
