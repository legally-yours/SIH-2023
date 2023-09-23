import mongoose from 'mongoose';

const eventschema = new mongoose.Schema({
  eventname: String,
  eventdate: String,
  eventtime: String,
  host: String,
  participant: Array,
});

export default mongoose.model('Event', eventschema);
