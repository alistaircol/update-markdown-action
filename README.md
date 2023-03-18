# Update Markdown Action

> A simple workflow to update sections in a markdown file.

<a href="https://github.com/alistaircol/update-markdown-action/actions/workflows/test.yaml"><img alt="javscript-action status" src="https://github.com/alistaircol/update-markdown-action/actions/workflows/test.yaml/badge.svg"></a>
<a href="https://img.shields.io/github/v/release/alistaircol/update-markdown-action"><img alt="release" src="https://img.shields.io/github/v/release/alistaircol/update-markdown-action"></a>

<!-- local: npm install -g action-docs -->
<!-- local: action-docs --update-readme -->
<!-- https://github.com/npalm/action-docs#tldr -->

---

<!-- action-docs-description -->

<!-- action-docs-inputs -->

<!-- action-docs-outputs -->

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
<!-- end-task-list -->

<details>
<summary>Tagging</summary>

```bash
git tag -a -m "My first action release" v0.0.1
git push --follow-tags
```

</details>

## Testing

```bash
npm run test
```
