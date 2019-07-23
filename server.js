const express = require('express');
const app = express();
require('./hbs/helpers');

var hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express engine hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
 
  res.render('home', {
  	nombre: 'caRloS fUentes'
  });
});

app.get('/about', (req, res) => {
 
  res.render('about');

});

/*app.get('/data', (req, res) => {

  res.send('hola data')
});*/

app.listen(port, () => {
	console.log('server funcionando' + port);
}); 