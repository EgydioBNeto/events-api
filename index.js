const app = require('./src/app');
require('dotenv').config();
const PORT = process.env.API_PORT;

app.listen(PORT, () => {
    console.log(`Express started at http://localhost:${PORT}`);
});
