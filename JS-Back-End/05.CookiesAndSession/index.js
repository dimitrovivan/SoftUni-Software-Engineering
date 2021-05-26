const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();

app.listen(5000, () => console.log('Server listenning at port 5000'));

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    let username = req.cookies.username || 'no one';

    res.send(`Welcome ${username},to home page! Go to <a href="/register">Register</a>${req.cookies.password}`);
})

app.get('/register', (req, res) => {
     res.send(`
     <form method="POST">
       Username: <input type="text" name="username" />
       <br>Password: <input type="password" name="password" />
       <br>
       <input type="submit" value="Register" />
    </form>`);
})

app.post('/register', (req, res) => {
     
    let username = req.body.username;

    bcrypt.hash(req.body.password, 5, (err, hash) => {
        if(err) res.send(err.message);
        
        res.cookie('password', hash);
        res.cookie('username', username);
        res.redirect('/');

    })
 
})