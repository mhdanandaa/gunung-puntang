const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const destinationRoutes = require('./routes/destinationRoutes');
const authRoutes = require('./routes/authRoutes')

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: "rahasia_super_aman",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use('/api', destinationRoutes);
app.use('/api', authRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});