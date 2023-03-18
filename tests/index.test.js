const path = require('path');
const fs = require('fs');
const update_document = require("../lib/update_document");

test('it will fail when the file does not exist', () => {
  const file = 'blah';

  const t = () => {
    update_document(
      file,
      '<!-- start-test -->',
      '<!-- end-test -->',
      'section content'
    )
  };

  expect(t).toThrowError(`File (${file}) does not exist`)
});

test('it replaces section word boundary', () => {
  const file = path.join(__dirname, 'test.md');

  const contents = `<!-- start-test -->
<!-- end-test -->
`;

  fs.writeFileSync(file, contents);

  const t = () => {
    update_document(
      file,
      '<!-- start-test -->',
      '<!-- end-test -->',
      `\nsection content\n`
    )
  };

  t();

  const expected = `<!-- start-test -->
section content
<!-- end-test -->
`;

  const actual = fs.readFileSync(file).toString();

  expect(actual).toMatch(expected);
})
