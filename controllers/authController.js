const db = require('../db/connection');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "DB Error" });

    if (results.length === 0) {
      return res.json({ success: false, message: "Username/password salah" });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ success: false, message: "Error saat membandingkan password" });

      if (isMatch) {
        req.session.user = user;
        res.json({ success: true, message: "Login berhasil" });
      } else {
        res.json({ success: false, message: "Username/password salah" });
      }
    });
  });
};

exports.checkAuth = (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.json({ success: true });
};
