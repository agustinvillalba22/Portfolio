const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from src directory
app.use(express.static(path.join(__dirname)));

// Base de datos SQLite
const db = new sqlite3.Database(path.join(__dirname, '../forms.db'));
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS forms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

// Ruta para recibir formularios
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    db.run(
        `INSERT INTO forms (name, email, message) VALUES (?, ?, ?)`,
        [name, email, message],
        function (err) {
            if (err) {
                return res.status(500).json({ error: 'Database error.' });
            }
            res.json({ success: true, id: this.lastID });
        }
    );
});

// (Opcional) Ruta para ver todos los mensajes
app.get('/api/forms', (req, res) => {
    db.all(`SELECT * FROM forms ORDER BY created_at DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error.' });
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});


const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'agustinhernanvillalba@gmail.com', // tu email
        pass: '2009168290.' // tu contraseña de aplicación de Gmail
    }
});
