# Extension for EspoCrm
- Create custom field: "enum extend view" to extend view part of enum field type
- User can choose dropdown, radio button or kaban

## Workflow
1. create sub branch, finish the feature and create merge request
2. Merge to dev branch, squash commit and delete sub branch after merging.
3. The main branch is for release only.

## Document for dev
- write doc in folder document

1. ` docker-compose up ` and check localhost:8080

### Ref

1. [Structurizr help](https://structurizr.com/help)
2. [Structurizr lite](https://structurizr.com/share/76352/documentation#overview)
3. [Structurizr DSL](https://github.com/structurizr/dsl/blob/master/docs/language-reference.md)
4. [Structurizr Cookbook](https://github.com/structurizr/dsl/tree/master/docs/cookbook)
5. https://viblo.asia/p/mo-hinh-hoa-kien-truc-phan-mem-voi-c4-vyDZO1vQ5wj
6. https://appsindie.com/tao-tai-lieu-thiet-ke-hoan-chinh-voi-arc42/

## Coding
- write code in folder source-code

1. first time

```
npm install
node build --all
```

- Wait till the end, if it has error when run ` grunt ` command the get into the site folder and run manually.
- For other errors, try updating node version and re-install node_modules ` npm install `.

- If the grunt command finish with an error said that the "chmod-folders" command fails, you can ignore it.

2. While coding, run command to copy extension to demo site
` node build --copy `

3. Build extension: ` node build --extension `