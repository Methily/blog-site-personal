const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all posts
router.get('/', (req, res) => {
  db.query('SELECT * FROM posts ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Get single post by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send({ message: "Post not found" });
    res.json(results[0]);
  });
});

// Create new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).send({ message: 'Missing title or content' });

  db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId, title, content });
  });
});

// Delete post by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM posts WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send({ message: "Post not found" });
    res.status(200).send({ message: "Post deleted successfully" });
  });
});

module.exports = router;
