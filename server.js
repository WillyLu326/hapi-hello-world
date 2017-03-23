const Hapi = require('Hapi');
const server = new Hapi.Server();

server.connection({ port: 3001 });

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (req, res) => {
            res({ message: 'This is home page' })
        }
    }
});

server.route({
    method: 'GET',
    path: '/hello',
    config: {
        handler: (req, res) => {
            res({ message: 'This is hello page' })
        }
    }
})

server.start(err => {
    if (err) throw err;
    console.log(`start server at ${ server.info.uri }`);
})