var express = require('express');
var app = express();

app.get('/:id', function(req, res) {
   res.send('Id that was append to it ' + req.params.id);
});

app.listen(3000);

app.use(function(req, res, next) {
   res.status(404).send('Sorry i cant find anything you want !');
});
