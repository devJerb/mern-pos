const express = require('express');

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server on port http://localhost:${PORT}/`);
});