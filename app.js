import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import Lawyer from './models/lawyermodel.js';
import Client from './models/clientmodel.js';

const app = express();
const server = http.createServer(app);

mongoose.connect("mongodb+srv://admin:Lx31BuwA6OxVnIqJ@cluster0.5yi2iiv.mongodb.net/legally-yours?retryWrites=true&w=majority&appName=AtlasApp")

server.listen(3000, function(){
    console.log("Server is running");
})