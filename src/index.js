const express = require('express');

const app = express();
const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
res.send("hello world");
});

app.listen(PORT, () => { console.log(`server listening on port ${PORT}`); });
