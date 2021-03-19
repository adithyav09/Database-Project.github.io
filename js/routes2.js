const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to Vacation Getaway!</h1>');
        res.write(<form><input type = "text"><button>Submit</button></input></form>);
        res.write('</body>');
        res.write('</html>');
        res.end();
    };
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><ul>');
        res.write('<li>User1: Adithya</li>');
        res.write('<li>User2: Derek</li>');
        res.write('</ul></body>');
        res.write('</html>');
        res.end();
    };
    if (url === '/create-user' && method === 'POST') {
        console.log();
    }
};

module.exports = requestHandler;