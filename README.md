# Update Markdown Action

> A simple workflow to update sections in a markdown file.

<a href="https://github.com/alistaircol/update-markdown-action/actions/workflows/test.yaml"><img alt="javscript-action status" src="https://github.com/alistaircol/update-markdown-action/actions/workflows/test.yaml/badge.svg"></a>
<a href="https://img.shields.io/github/v/release/alistaircol/update-markdown-action"><img alt="release" src="https://img.shields.io/github/v/release/alistaircol/update-markdown-action"></a>

<!-- local: npm install -g action-docs -->
<!-- local: action-docs --update-readme -->
<!-- https://github.com/npalm/action-docs#tldr -->

---

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
> **Note**
> This comment marks the start of a section which is updated using this action in an [example workflow](https://github.com/alistaircol/update-markdown-action/blob/main/.github/workflows/example.yaml#L33)!

```
task: Available tasks for this project:
* actionlint:       Lint all workflow yaml files
* yamllint:         Lint all yaml files (and actionlint on workflow files)
```

> **Note**
> This comment marks the end of a section which is updated using this action!
<!-- end-task-list -->

<details>
<summary>Tagging</summary>

```bash
# get most recent version
git --no-pager tag |  sort -V
# increment version
git tag -a -m "Refactor and add unit tests" v0.0.2
git push --follow-tags
```

</details>

## Testing

```bash
npm run test
```
