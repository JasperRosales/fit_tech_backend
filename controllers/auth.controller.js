import db from '../config/database.js';

export const test = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Database query failed" });
    }
};