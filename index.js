var express = require('express');
var cors = require('cors');
require('dotenv').config()
const fileupload = require('express-fileupload');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', fileupload(), (req, res) => {
  res.json({
    name: req.files.upfile.name,
    size: req.files.upfile.size,
    type: req.files.upfile.mimetype
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
