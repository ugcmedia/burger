const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({ defaultLayout: 'main',  extname: '.hbs' }));
app.set('view engine', 'hbs');


app.use('/', require('./controllers/burgers_controller'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('app listening on port ' + PORT);
});


