const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('your_mongodb_atlas_connection_string_here', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
