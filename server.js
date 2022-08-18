const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer( (req, res) =>{
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('helllo');
    })

    greet();
    greet();
    // set header content
    res.setHeader('Content-Type', 'text/html');

    let path = './html/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us' :
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path += 'error.html';
            res.statusCode = 404;
            break; 
    }
    // read a file
    fs.readFile( path, (err,data) => {
        if (err){
            console.log(err)
            res.end();
        }
        // res.write(data);
        res.end(data);
        
    })
});

server.listen(3000, 'localhost', () => {
    console.log('waiting for the request at 3000');
})