/* eslint-disable no-unused-vars */
/*eslint-env node*/
var server = require("diet");
var app = server();
var wss = require("./websockets-server");
app.listen("http://localhost:8000");


var static = require("diet-static")({
  path: app.path + "/app"
});


app.view("file", static);

app.missing(function($) {
  $.status("404", "Page not Found");
  $.redirect("/error.html");
});

app.get("/", function($) {
  $.redirect("index.html");
});
