var express = require('express');
var app = express();
app.use(express.logger());

var hello = fs.readFileSync("index.html", "utf8");
var buffer = new Buffer (hello, "utf8");
var buffer2 = buffer.toString("utf8");
app.get('/', function(request, response) {
  response.send(buffer2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

