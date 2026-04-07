const express = require('express');
const path = require('path');

const app = express();

// SERVIRAJ PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// fallback na index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
