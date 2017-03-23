const airplanes = require('./../../../data/airplanes');

module.exports = {
    method: 'GET',
    path: '/airplanes',
    config: {
        handler: (req, res) => res(airplanes)
    }
}