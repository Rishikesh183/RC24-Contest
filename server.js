const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/cricmawa_rc24', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  Age: Number,
  message: String,
  phone: String
});
const Submission = mongoose.model('Submission', SubmissionSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/submit-form', async (req, res) => {
  const { name, email, Age, message, phone } = req.body;

  const newSubmission = new Submission({
      name,
      email,
      Age,
      message,
      phone
  });
  try {
      await newSubmission.save();
      res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
      console.error('Error saving submission:', error);
      res.status(500).json({ error: 'An error occurred while saving the submission.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
