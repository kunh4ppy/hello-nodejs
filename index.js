var express = require('express');
var app = express();
app.get('/dqt', function (req, res) {
	res.send('Hello dqt');
});
app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

