/**
 * Copy files specified in package.json "files", from project root to dist
 */

const fs = require('fs');
const path = require('path');

const distFolder = 'dist';
const packageJson = JSON.parse(fs.readFileSync('package.json'));

const filesToCheck = [
  '.npmrc',
  '.npmignore',
  'package.json',
  ...(packageJson.files || [])
];

const filesToCopy = filesToCheck.filter(
  filename => !filename.includes('*') && fs.existsSync(filename)
);

for (const filename of new Set(filesToCopy)) {
  console.log('Copying', filename);
  fs.copyFileSync(filename, path.join(distFolder, filename));
}