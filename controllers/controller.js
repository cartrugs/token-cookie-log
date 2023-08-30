// controller.js
const jwt = require('../helpers/jwt');
const { verifyToken } = require('../helpers/jwt');

const loginUser = (req, res) => {
    const { username, password } = req.body;


    // Aquí puedes implementar la lógica de autenticación
    // Verificar el usuario y la contraseña en tu base de datos o archivo, etc.

    if (username === 'user' && password === '123') {
        const payload = { username };
        const token = jwt.createToken(payload);
        res.cookie('jwt', token, { httpOnly: true });
        res.redirect('/profile');
    } else {
        res.send('Invalid credentials');
    }
};

const profilePage = (req, res) => {
    const token = req.cookies.jwt;
    const decodedToken = verifyToken(token);

    if (decodedToken) {
        res.render('profile', { username: decodedToken.username });
    } else {
        res.redirect('/');
    }
};

const logoutUser = (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
};

const renewToken = (req, res) => {
    const token = req.cookies.jwt;
    const decodedToken = verifyToken(token);

    if (decodedToken) {
        const newToken = jwt.renewToken({ username: decodedToken.username });
        res.cookie('jwt', newToken, {
            httpOnly: true,
            maxAge: 1000
        });
        res.redirect('/profile');
    } else {
        res.redirect('/');
    }
};


module.exports = { 
    loginUser, 
    profilePage, 
    logoutUser,
    renewToken
};
