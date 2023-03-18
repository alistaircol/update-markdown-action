const core = require('@actions/core');
const update_document = require("./lib/update_document");

try {
  const file = core.getInput('file');
  const delimiterOpen = core.getInput('delimiter-open');
  const delimiterClose = core.getInput('delimiter-close');
  const contents = `
<!-- DO NOT EDIT THIS SECTION - IT IS UPDATED BY A GITHUB WORKFLOW -->
${core.getInput('content')}
`;

  update_document(
    file,
    delimiterOpen,
    delimiterClose,
    contents
  );
} catch (e) {
  core.setFailed(e.message);
}
