var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "New Text Here"
   // 01/23/22: Updated from "Hello World" per request by Andrew Dunn
   response.end('New Text Here\n')
}).listen(3333)

// Console will print the message
console.log('Server running')