//backend server built with node and express. using mondo db as databse

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb'); // MongoClient import

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI (ensure to replace <db_password> with your actual password)
const uri = "mongodb+srv://somi1104:Somi%40251104@cluster0.kpncy.mongodb.net/myDatabaseName?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas using Mongoose (without deprecated options)
mongoose.connect(uri)
    .then(() => console.log('Mongoose connected successfully'))
    .catch((err) => console.log('Mongoose connection error: ', err));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Ping the MongoDB deployment using MongoClient
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensure that the client closes when finished or an error occurs
    await client.close();
  }
}
run().catch(console.dir);

// Define Schemas
const networkingSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    profession: String,
    message: String
});

const ebRecruitmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    experience: String,
    message: String
});

// Define Models
const Networking = mongoose.model('Networking', networkingSchema);
const EBRecruitment = mongoose.model('EBRecruitment', ebRecruitmentSchema);

// Networking Form Submission Route
app.post('/networking', async (req, res) => {
    try {
        const networkingEntry = new Networking(req.body);
        await networkingEntry.save();
        res.status(201).send('Networking form submitted successfully');
    } catch (error) {
        res.status(400).send('Error submitting Networking form: ' + error);
    }
});

// EB Recruitment Form Submission Route
app.post('/eb-recruitment', async (req, res) => {
    try {
        const ebEntry = new EBRecruitment(req.body);
        await ebEntry.save();
        res.status(201).send('EB Recruitment form submitted successfully');
    } catch (error) {
        res.status(400).send('Error submitting EB Recruitment form: ' + error);
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
