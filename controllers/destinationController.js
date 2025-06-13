const model = require('../models/destinationModel');
const db = require('../db/connection');

//GET ALL DATA
exports.getAllDestinations = (req, res) => {
    const sqlDestinations = 'SELECT * FROM destinations';

    db.query(sqlDestinations, (err, destinations) => {
        if (err) return res.status(500).json({ error: err.message });

        if (destinations.length === 0) {
            return res.status(200).json([]);
        }

        const ids = destinations.map(d => d.id);
        const placeholders = ids.map(() => '?').join(',');

        const sqlImages = `SELECT * FROM destination_images WHERE destination_id IN (${placeholders})`;
        const sqlInfos = `SELECT * FROM destination_additional_info WHERE destination_id IN (${placeholders})`;
        const sqlRefs = `SELECT * FROM destination_references WHERE destination_id IN (${placeholders})`;

        db.query(sqlImages, ids, (err, images) => {
            if (err) return res.status(500).json({ error: err.message });

            db.query(sqlInfos, ids, (err, infos) => {
                if (err) return res.status(500).json({ error: err.message });

                db.query(sqlRefs, ids, (err, refs) => {
                    if (err) return res.status(500).json({ error: err.message });

                    const finalResult = destinations.map(dest => ({
                        ...dest,
                        images: images.filter(i => i.destination_id === dest.id).map(i => ({
                            image_url: i.image_url,
                            description: i.description
                        })),
                        additional_info: infos.filter(info => info.destination_id === dest.id).map(info => ({
                            info_key: info.info_key,
                            info_value: info.info_value
                        })),
                        references: refs.filter(ref => ref.destination_id === dest.id).map(ref => ({
                            title: ref.title,
                            url: ref.url
                        }))
                    }));

                    res.status(200).json(finalResult);
                });
            });
        });
    });
};


//UPDATE
exports.updateDestination = (req, res) => {
    const { name, location, description } = req.body;
    const id = req.params.id;

    // ✅ Validasi field wajib
    if (!name || !location || !description) {
        return res.status(400).json({ error: 'Semua field wajib diisi' });
    }

    const sql = `UPDATE destinations SET name = ?, location = ?, description = ? WHERE id = ?`;
    db.query(sql, [name, location, description, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Destinasi tidak ditemukan' });
        }

        res.json({ message: 'Destinasi berhasil diperbarui' });
    });
};

//DELETE
exports.deleteDestination = (req, res) => {
    const { id } = req.params;

    const deleteRelatedTables = [
        'DELETE FROM destination_images WHERE destination_id = ?',
        'DELETE FROM destination_additional_info WHERE destination_id = ?',
        'DELETE FROM destination_references WHERE destination_id = ?',
        'DELETE FROM destinations WHERE id = ?'
    ];

    // Hapus berurutan agar foreign key tidak bermasalah
    deleteRelatedTables.reduce((prevPromise, query) => {
        return prevPromise.then(() => {
            return new Promise((resolve, reject) => {
                db.query(query, [id], (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
        });
    }, Promise.resolve())
    .then(() => res.status(200).json({ message: 'Destinasi berhasil dihapus' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

//INSERT
exports.createDestination = (req, res) => {
    const { name, location, description, images = [], additional_info = [], references = [] } = req.body;

    // ✅ Validasi: field wajib
    if (!name || !location || !description) {
        return res.status(400).json({ error: 'Semua field wajib diisi' });
    }

    // ✅ Validasi: max 4 gambar
    if (images.length > 4) {
        return res.status(400).json({ error: 'Maksimal 4 gambar diperbolehkan' });
    }

    model.createDestination({ name, location, description }, (err, destinationId) => {
        if (err) return res.status(500).json({ error: err.message });

        const insertImages = images.map(img => new Promise((resolve, reject) => {
            const sql = `INSERT INTO destination_images (destination_id, image_url, description) VALUES (?, ?, ?)`;
            db.query(sql, [destinationId, img.image_url, img.description], (err) => {
                if (err) reject(err);
                else resolve();
            });
        }));

        const insertInfo = additional_info.map(info => new Promise((resolve, reject) => {
            const sql = `INSERT INTO destination_additional_info (destination_id, info_key, info_value) VALUES (?, ?, ?)`;
            db.query(sql, [destinationId, info.info_key, info.info_value], (err) => {
                if (err) reject(err);
                else resolve();
            });
        }));

        const insertRefs = references.map(ref => new Promise((resolve, reject) => {
            const sql = `INSERT INTO destination_references (destination_id, title, url) VALUES (?, ?, ?)`;
            db.query(sql, [destinationId, ref.title, ref.url], (err) => {
                if (err) reject(err);
                else resolve();
            });
        }));

        Promise.all([...insertImages, ...insertInfo, ...insertRefs])
            .then(() => res.status(201).json({ message: 'Destinasi ditambahkan', destinationId }))
            .catch(err => res.status(500).json({ error: err.message }));
    });
};
