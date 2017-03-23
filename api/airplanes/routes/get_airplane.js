const airplanes = require('./../../../data/airplanes');

module.exports = {
    method: 'GET',
    path: '/airplanes/{id}',
    config: {
        handler: (req, res) => {
            let airplanesData = airplanes.filter(item => item.id == req.params.id);
            if (airplanesData.length == 0) {
                res({ message: 'no airpane found' });
            } else {
                res(airplanesData[0]);
            }
        }
    }
}