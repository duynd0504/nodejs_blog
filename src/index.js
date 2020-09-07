const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;

//Set satic file  
app.use(express.static(path.join(__dirname,'public')));
//HTTP logger
app.use(morgan('combined'));
//https://www.google.com/search?q=f8 lap trinh&ref=f8&author=sondn
app.engine('hbs', handlebars({
   extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


//------
app.get('/trang-chu', (req, res) => {
  res.render('home');
})

app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})


//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})