const Hapi = require('Hapi');
const server = new Hapi.Server();

server.connection({ port: 3001 });



server.start(err => {
    if (err) throw err;
    console.log(`start server at ${ server.info.uri }`);
})