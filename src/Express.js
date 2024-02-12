const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Your other routes and middleware here...

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
