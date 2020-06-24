const express = require('express'),
    path = require('path'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);