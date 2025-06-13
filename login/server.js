const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "rahasia_super_aman",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// DB Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_puntang"
});
db.connect(err => {
  if (err) throw err;
  console.log("Koneksi database berhasil");
});
global.db = db; 

// Routes
const destinationRoutes = require('./routes/destinationRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api', destinationRoutes);
app.use('/api', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});