const bcrypt = require("bcrypt");

const plainPassword = "Puntang_123@admin";

bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log("Password hash:", hash);
});
