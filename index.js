const core = require('@actions/core');
const fs = require('fs');

try {
  const fileName = core.getInput('file');

  if (!fs.existsSync(fileName)) {
    core.setFailed(`File (${fileName}) does not exist`);
    return;
  }

  const delimiterOpen = core.getInput('delimiter-open');
  const delimiterClose = core.getInput('delimiter-close');

  const file = fs.readFileSync(fileName, 'utf-8');

  const startIndex = file.indexOf(delimiterOpen) + delimiterOpen.length;
  const endIndex = file.indexOf(delimiterClose);

  const contents = `\n${core.getInput('content')}\n`;

  const updatedReadme = file.slice(0, startIndex) + contents + file.slice(endIndex);

  fs.writeFileSync(fileName, updatedReadme);
} catch (e) {
  core.setFailed(e.message);
}
