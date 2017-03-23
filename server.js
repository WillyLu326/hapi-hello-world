const Hapi = require('Hapi');
const server = new Hapi.Server();

server.connection({ port: 3001 });

server.route(require('./api/airplanes/routes/get_airplanes'));
server.route(require('./api/airplanes/routes/get_airplane'));

server.start(err => {
    if (err) throw err;
    console.log(`start server at ${ server.info.uri }`);
})