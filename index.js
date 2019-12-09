const http = require('http');
const path = require('path');
const fs = require('fs')

const server = http.createServer((request, response) => {
    /* console.log(`request url: ${request.url}`);
    if (request.url == '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content);
        });
    }
    else if (request.url == '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content)=>{
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content);
        });
    }
    else if (request.url == '/api/users'){
        const users = [
            {
                name: 'Bob Smith',
                age: 30
            }, 
            {
                name: 'Katelynne Beaty',
                age: 28
            }
        ];

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(users));
    } */

    //Build file path
    let filePath = path.join(
        __dirname, 
        'public', 
        request.url === '/' ? 'index.html' : request.url
    );

    //Extension of file
    let extension = path.extname(filePath);

    let contentType = 'text/html';

    switch(extension){
        case ".js": 
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content)=>{
        if (err) {
            if (err.code == 'ENOENT'){
                //PAGE NOT FOUND ERROR
                fs.readFile(path.join('public','404.html'), (err, content)=>{
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(content, 'utf8');
                    }
                );
            }
            else{
                response.writeHead(500);
                response.end(`Server Error: ${err.code}`);
            }
        }
        else{
            //Success
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf8');
        }
    })
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, ()=> console.log(`server running on ${PORT}`));