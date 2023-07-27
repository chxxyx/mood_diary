// const http = require('http');

// const server = http.createServer(function(req,res){
//     res.writeHead(200);
//     res.write("<hi>hello world<h1/>");
//     res.end('<p>END<p/>');
// })

//파일전송 

const http = require('http');
const fs = require('fs');
try {
    const data = fs.readFile('./index.html');
    res.writeHead(200);
    res.end(data);
} catch (error) {
    console.log(error);
    res.writeHead(404);
    res.end(error.message);
}

server.listen(8000, function(){
    console.log('8000번 포트로 실행');

});