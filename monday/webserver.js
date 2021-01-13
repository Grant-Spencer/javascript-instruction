const http = require("http");

let server = http.createServer(function(request, response) {
    console.log("Got request");
    response.write("Howdy!");
    response.end();
    });

    server.listen(3000);