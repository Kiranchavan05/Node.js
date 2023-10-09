const http= require('http');


// const serve=function((req,res){

// })



const server=http.createServer((req,res)=>{
    // console.log(req.url, req.method, req.headers)
    // process.exit()

    const url=req.url;
    if (url==='/'){
        res.write('<html>');
        res.write('<head><title>My First Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end();

    }

    if (url==='/home'){
        res.write('<html>');
    res.write('<head><title>Home Page</title></head>')
    res.write('<body><h1> Welcome home</h1></body>')
    res.write('</html>')
    return res.end();

    }

    if (url==='/about'){
        res.write('<html>');
    res.write('<head><title>About Page</title></head>')
    res.write('<body><h1> Welcome About</h1></body>')
    res.write('</html>')
    return res.end();

    }

    if (url==='/node'){
        res.write('<html>');
    res.write('<head><title>Node Page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    return res.end();

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my node.js</h1></body>')
    res.write('</html>')
    res.end();

})

server.listen(4000);
