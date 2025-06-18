const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const postsRouter = require('./routes/posts');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
