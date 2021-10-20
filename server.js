const http = require('http');
const url = require('url');
const { parse } = require('querystring')

http.createServer((request, response) => {
    console.log('server work');
    if (request.method == 'GET') {
        function readUsers(url) {
            console.log(request.method); 
            
            let urlparse = url.parse(request.url, true);
            response.end(urlparse.query.test);
        }
        readUsers(url);
    }
    else if (request.method == 'POST') {
        function createUser(url, { parse }) {
            // POST
            let body = '';
            request.on('data', chunk => {
                body += chunk.toString();
            });
            request.on('end', () => {
                console.log(body);
                let params = parse(body);
                console.log(params);
                response.end('ok');
            });
        }
        createUser(url, { parse });
    }
    else if (request.method == 'DELETE') {
        function deleteUser(url, { parse }, id = 0) {
            let body = '';
            let change;
            request.on('data', chunk => {
                body += chunk.toString();
            });
            request.on('end', () => {
                console.log(body);
                let params = parse(body);
                console.log();
                response.end('ok');
            });
        }
        deleteUser(url, { parse }, 1);
    }
    else if (request.method == 'PUT') {
        function updateUser(url, id = 1) {
            let body = '';
            request.on('data', chunk => {
                body += chunk.toString();
            });
            request.on('end', () => {
                console.log(body);
                let params = parse(body);
                console.log();
                response.end('ok');
            });
        }
        updateUser(url, 5);
    }
}).listen(5000);




/*
var url  = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

fetch(url, {
    method: "POST",
    headers: {"content/type": "application/json"},
    body: JSON.stringify({
        userId: 6,
        id: 300,
        title: "learn fetch api",
        completed: false
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

fetch(url, {
    method: "PUT",
    headers: {"content/type": "application/json"},
    body: JSON.stringify({
        userId: 1,
        id: 5,
        title: 'hello fetch api',
        completed: false
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

fetch(url, {
    method: "DELETE"
})
    .then(response => response.json())
    .then(data => console.log(data));
*/