const fs = require('fs');

function summarize() {
  const result = {};
  result[angularReport.audits['first-meaningful-paint'].description] = angularReport.audits['first-meaningful-paint'].displayValue;
  return result;
}

const angularReport = require('../packages/angular-cli/report.json');

const angularResults = summarize(angularReport);
const results = [];
results.push(angularResults);

fs.writeFileSync('./report.json', JSON.stringify(results, null, 2));
