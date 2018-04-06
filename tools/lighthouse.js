const fs = require('fs');

function getReportPerProject(name) {
  const data = require(`../packages/${name}/report.json`);
  const getMetric = function (name){
    return {
      description: data.audits[name].description,
      displayValue: data.audits[name].displayValue
    }
  };

  const report = {};
  const result = [];
  const metrics = ['first-meaningful-paint', 'speed-index-metric', 'first-interactive', 'consistently-interactive'];
  metrics.forEach((metric) => {
    result.push(getMetric(metric));
  });

  report[name] = {
    name: name,
    metrics: result
  };
  return report;
}

function generateTotalReport() {
  const results = [];
  projects.forEach(project => {
    results.push(getReportPerProject(project.name));
  });

  return results;
}

// generate report per project
const projects = [
  {
    name: 'angular-cli',
    output: 'angular-cli/src/assets'
  },
  {
    name: 'polymer-2-application',
    output: 'polymer-2-application/src'
  },
  {
    name: 'vue-cli-default',
    output: 'vue-cli-default/public'
  },
];

const totalReport = generateTotalReport();
projects.forEach(project => {
  fs.writeFileSync(`../packages/${project.output}/report.json`, JSON.stringify(totalReport, null, 2));
});

