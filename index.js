const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'this is the end of the f...ing world'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

