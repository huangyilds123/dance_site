const express = require('express');
const app = express();

app.use(express.static('./'))

// Run when client connect 

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));



