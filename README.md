# Update Markdown Action

> A simple GitHub action to update sections in a markdown file.

<a href="https://github.com/alistaircol/update-markdown-action/actions/workflows/test.yaml"><img alt="javscript-action status" src="https://github.com/alistaircol/update-markdown-action/actions/workflows/test.yaml/badge.svg"></a>
<a href="https://img.shields.io/github/v/release/alistaircol/update-markdown-action"><img alt="release" src="https://img.shields.io/github/v/release/alistaircol/update-markdown-action"></a>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Summary](#summary)
- [Description](#description)
- [Inputs](#inputs)
- [Runs](#runs)
- [Usage](#usage)
- [Examples](#examples)
- [Development](#development)
- [Testing](#testing)
- [E2E Testing](#e2e-testing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Summary

Replaces the contents of a markdown (or, technically any file) between a pair of delimiters.

```markdown
My repository

<!-- start-dynamic-section -->
<!-- end-dynamic-section -->

More test
```

Can become

```diff
 My repository

 <!-- start-dynamic-section -->
+```bash
+# i'm a forkbomb - don't run me
+:(){ :|:& };:
+```
 <!-- end-dynamic-section -->

 More test
```

---

<!-- local: npm install -g action-docs -->
<!-- local: action-docs --update-readme -->
<!-- https://github.com/npalm/action-docs#tldr -->

<!-- action-docs-description -->
## Description

Update a section in a markdown with arbitrary markup
<!-- action-docs-description -->

<!-- action-docs-inputs -->
## Inputs

| parameter | description | required | default |
| --- | --- | --- | --- |
| file | Relative path to markdown document to update | `false` | README.md |
| delimiter_open | Opening delimiter to indicate the section to update | `false` | `<!-- start-section -->` |
| delimiter_close | Closing delimiter to indicate the section to update | `false` | `<!-- end-section -->` |
| content | Contents to place inside the section delimiters | `true` |  |
<!-- action-docs-inputs -->

<!-- action-docs-outputs -->

<!-- action-docs-outputs -->

<!-- action-docs-runs -->
## Runs

This action is a `node16` action.
<!-- action-docs-runs -->

---

## Usage

```yaml
- name: Update usage list tasks
  uses: alistaircol/update-markdown-section@v1
  with:
    file: ansible/README.md
    delimiter_open: <!-- start -->
    delimiter_close: <!-- end -->
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
<!-- DO NOT EDIT THIS SECTION - IT IS UPDATED BY A GITHUB WORKFLOW -->
> **Note**
> This comment marks the start of a section which is updated using this action in an [example workflow](https://github.com/alistaircol/update-markdown-action/blob/main/.github/workflows/example.yaml#L33)!

```
task: Available tasks for this project:
* actionlint:       Lint all workflow yaml files
* build:            Build action source for `dist`
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
git tag -a -m "A small refactor" v0.1.1
git push --follow-tags
```

</details>

## Testing

```bash
npm run test
```

## E2E Testing

Testing the action locally for a sanity check.

```bash
cat <<EOF > e2e.md && \
  INPUT_FILE=e2e.md \
  INPUT_DELIMITER_OPEN='<!-- e2e-start-section -->' \
  INPUT_DELIMITER_CLOSE='<!-- e2e-end-section -->' \
  INPUT_CONTENT='sjdnfljsndfljnsdflkn' \
  node dist/index.js \
  && less e2e.md \
  && rm e2e.md
<!-- e2e-start-section -->
<!-- e2e-end-section -->
EOF
```
