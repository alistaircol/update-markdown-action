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
    delimiter-open: <!-- start -->
    delimiter-close: <!-- end -->
    content: |
      ```
      // TODO: get content
      ```
```

## Examples

This workflow repository has an [example workflow](https://github.com/alistaircol/update-markdown-action/blob/main/.github/workflows/example.yaml).

It updates the development section below with contents of `task --list`.

I have used this workflow elsewhere to:

* List all tasks in a Taskfile with description
* List all tasks being executed by an ansible playbook

## Development

<!-- start-task-list -->
```
task: Available tasks for this project:
* actionlint:       Lint all workflow yaml files
* yamllint:         Lint all yaml files (and actionlint on workflow files)
```
<!-- end-task-list -->

<details>
<summary>Tagging</summary>

```bash
git tag -a -m "My first action release" v0.0.1
git push --follow-tags
```

</details>
