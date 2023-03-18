const fs = require('fs');

module.exports = function (
  file,
  delimiterOpen,
  delimiterClose,
  contents
) {
  if (!fs.existsSync(file)) {
    throw new Error(`File (${file}) does not exist`);
  }

  const document = fs.readFileSync(file, 'utf-8');

  const startIndex = document.indexOf(delimiterOpen) + delimiterOpen.length;
  const endIndex = document.indexOf(delimiterClose);

  const updatedContents = document.slice(0, startIndex) + contents + document.slice(endIndex);

  fs.writeFileSync(file, updatedContents);
}
