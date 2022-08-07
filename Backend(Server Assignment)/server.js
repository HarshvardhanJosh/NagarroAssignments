const http = require('http');
let fs = require("fs");
const superheroes = require("superheroes");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/plain');
    let path = "D:\Nagarro\NagarroAssignments\Pokemon\index.html";
    fs.readFile(path, (err, fileData) => {
        if(err){
            console.error("Failed to load");
        }else{
            res.write(fileData);
            res.end();
        }
    });
});
server.listen(3000, "localhost", () => {
    console.log("listening on port 3000 on localhost");
});