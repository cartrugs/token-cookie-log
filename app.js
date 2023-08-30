// app.js
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('./helpers/jwt'); // Archivo jwt.js que crearás
const routes = require('./routes/routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form');
});

app.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
  });

app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
