const http = require('http');

const server = http.createServer((req, res) => {
    console.log("server olusturma requesti basarili.");
});

server.listen(3000, 'localhost', () => {
    console.log('port 3000 deki veri talepleri dinleniyor');
})
