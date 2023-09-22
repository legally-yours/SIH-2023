import mongoose from 'mongoose';

// Replace 'mongodb://localhost/your-database-name' with your actual MongoDB connection string
const dbConnectionString = 'mongodb+srv://admin:Lx31BuwA6OxVnIqJ@cluster0.5yi2iiv.mongodb.net/legally-yours?retryWrites=true&w=majority&appName=AtlasApp';

// Define a function to list all collections in the database
async function af() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(dbConnectionString);
    console.log('Connected to MongoDB');

    // Get a reference to the default connection
    const db = mongoose.connection;

    // List all collections in the database
    const collections = await db.db.listCollections().toArray();

    console.log('Collections in the database:');
    collections.forEach((collection) => {
      console.log(collection.name);
    });

    // Close the database connection
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the function to list collections
export default af;
