import express from 'express';
import mysql from 'mysql2';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysqlpass@123',
  database: 'newdatabase'
})

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/books', (req, res) => {
  const q = "SELECT * FROM book"
  db.query(q, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  })
})

app.post('/books', (req, res) => {
  const q = "INSERT INTO book (`title`, `desc`, `cover`) VALUES (?)"
  const values = ["title from backend", "desc form backend", "cover from backend",];
  db.query(q, [values], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  })
})

app.listen(8080, () => {
  console.log('Example app listening on port http://localhost:8080');
});