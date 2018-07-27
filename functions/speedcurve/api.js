const fetch = require('node-fetch');

const fetchConfig = {
  headers: {
    Authorization: `Basic ${Buffer.from(
      '7q4b89cj7upkwh9i55epik9sz8pkdi:x'
    ).toString('base64')}`
  }
};
const getSiteApiUrl = id => `https://api.speedcurve.com/v1/urls/${id}`;
const mapUrlTests = url => ({
  label: url.label,
  url: url.url,
  metrics: {
    ...url.tests[url.tests.length - 1]
  }
});
const parseJson = res => res.json();
const fetchSite = urlObj => {
  const url = getSiteApiUrl(urlObj.url_id);
  return fetch(url, fetchConfig)
    .then(parseJson)
    .then(mapUrlTests);
};
const fetchSites = data => Promise.all(data.sites[0].urls.map(fetchSite));

exports.fetchReport = () => {
  return fetch('https://api.speedcurve.com/v1/sites', fetchConfig)
    .then(parseJson)
    .then(fetchSites);
};
