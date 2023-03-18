# Update Markdown Action

A simple workflow to update sections in a markdown file.

<!-- local: npm install -g action-docs -->
<!-- local: action-docs --update-readme -->

<!-- action-docs-description -->
## Description

Update a section in a markdown with arbitrary markup
<!-- action-docs-description -->

<!-- action-docs-inputs -->
## Inputs

| parameter | description | required | default |
| --- | --- | --- | --- |
| file | Relative path to markdown document to update | `false` | README.md |
| delimiter-open | Opening delimiter to indicate the section to update | `false` | `<!-- start-section -->` |
| delimiter-close | Closing delimiter to indicate the section to update | `false` | `<!-- end-section -->` |
| content | Contents to place inside the section delimiters | `true` |  |
<!-- action-docs-inputs -->

<!-- action-docs-outputs -->

<!-- action-docs-outputs -->

<!-- action-docs-runs -->
## Runs

This action is a `node16` action.
<!-- action-docs-runs -->

## Usage

```yaml
- name: Update usage list tasks
  uses: alistaircol/update-markdown-section@v1
  with:
    file: ansible/README.md
    delimiter-open: <!-- start-task-list -->
    delimiter-close: <!-- end-task-list -->
    content: |
      ```
      // TODO: get content
      ```
```

## Examples

TODO

## Development

```bash
task yamllint
```

<details>
<summary>Tagging</summary>

```bash
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

</details>
