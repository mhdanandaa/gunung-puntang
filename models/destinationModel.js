const db = require('../db/connection');

exports.createDestination = (data, callback) => {
    const { name, location, description } = data;
    const sql = `INSERT INTO destinations (name, location, description) VALUES (?, ?, ?)`;
    db.query(sql, [name, location, description], (err, result) => {
        if (err) return callback(err);
        callback(null, result.insertId);
    });
};