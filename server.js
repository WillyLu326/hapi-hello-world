const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3001 });

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (req, res) => {
            res({ 'message': 'hapi home page' });
        }
    }
});

server.route({
    method: 'GET',
    path: '/hello',
    config: {
        handler: (req, res) => {
            res({ 'message': 'hello hapi' });
        }
    }
});

server.start(err => {
    if (err) throw err;
    console.log(`server started at ${ server.info.uri }`);
});