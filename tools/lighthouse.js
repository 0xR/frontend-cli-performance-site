const fs = require('fs');

function getReportPerProject(path, name) {
  const data = require(`../packages/${path}/report.json`);
  const getMetric = function (name){
    return {
      description: data.audits[name].description,
      displayValue: data.audits[name].displayValue
    }
  };

  const result = [];
  const metrics = ['first-meaningful-paint', 'speed-index-metric', 'first-interactive', 'consistently-interactive'];
  metrics.forEach((metric) => {
    result.push(getMetric(metric));
  });

  return {
    name: name,
    metrics: result
  };
}

function generateTotalReport() {
  const results = {};
  projects.forEach(project => {
    results[project.path] = getReportPerProject(project.path, project.name);
  });

  return results;
}

// generate report per project
const projects = [
  {
    name: 'Angular CLI',
    path: 'angular-cli',
    output: 'angular-cli/src/assets'
  },
  {
    name: 'Polymer CLI',
    path: 'polymer-2-application',
    output: 'polymer-2-application/src'
  },
  {
    name: 'VueJS CLI',
    path: 'vue-cli-default',
    output: 'vue-cli-default/public'
  },
];

const totalReport = generateTotalReport();
projects.forEach(project => {
  fs.writeFileSync(`../packages/${project.output}/report.json`, JSON.stringify(totalReport, null, 2));
});

