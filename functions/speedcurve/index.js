const api = require('./api');

exports.speedcurve = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');

  api.fetchReport().then(data => {
    res.status(200).send(data);
  });
};
