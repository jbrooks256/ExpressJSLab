const express = require('express'),
    path = require('path'),
    app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3000);