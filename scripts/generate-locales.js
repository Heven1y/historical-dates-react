const glob = require('glob');
const fs = require('fs');

const resources = {};

const files = glob.sync('./src/**/local.*.json');
const fileRegex = /.*src\/\d*_?(?<slice>\w*)\/?.*\/(?<component>\w+)\/local\.(?<language>\w+)\.json$/;

files.forEach(file => {
  const groups = file.match(fileRegex)?.groups;
  if (!groups) return;

  const { slice, component, language } = groups;
  resources[language] = resources[language] || {};
  resources[language][`${slice}.${component}`] = JSON.parse(fs.readFileSync(file, 'utf-8'));
});

fs.writeFileSync('./src/i18n/resources.json', JSON.stringify(resources, null, 2));