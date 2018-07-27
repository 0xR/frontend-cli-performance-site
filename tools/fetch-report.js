const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

async function generateTotalReport() {
  return await fetch(
    'https://us-central1-ruben-oostinga-speeltuin.cloudfunctions.net/speedcurve'
  ).then(res => res.json());

  // const results = {};
  // projects.forEach(project => {
  //   results[project.path] = getReportPerProject(project.path, project.name);
  // });

  // return results;
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
  {
    name: 'VueJS CLI (simple + Prettier)',
    path: 'vue-cli-simple-with-prettier',
    output: 'vue-cli-simple-with-prettier/public'
  },
  {
    name: 'create-react-app',
    path: 'create-react-app',
    output: 'create-react-app/src'
  }
];

async function main() {
  const totalReport = await generateTotalReport();
  projects.forEach(project => {
    fs.writeFileSync(
      path.join(__dirname, '..', 'packages', project.output, 'report.json'),
      JSON.stringify(totalReport, null, 2)
    );
  });
}

main();
