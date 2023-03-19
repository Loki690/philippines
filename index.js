const express = require('express');

const app = express();
// take multiple path
const path = require('path');

const dataIsland = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

// take multiple path
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res ) => {
  res.render('home');
})

app.get('/ph/:islands', (req, res) => {
  const {islands} = req.params;
  const data = dataIsland[islands];
  if(data){
    res.render('islands', {...data});
  }else{
    res.render('notfound', {islands});
  }
  // res.render('subreddit', {subreddit});
})
app.get('/about', (req, res ) => {
  res.render('about');
})

app.get('/contact', (req, res ) => {
  res.render('contact');
})

app.listen(3000, () => {

  console.log("Listening on port 3000.");

})
