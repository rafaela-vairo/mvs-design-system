# mnv-projeto



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type     | Default       |
| ---------------- | ------------------ | ----------- | -------- | ------------- |
| `projButton`     | `proj-button`      |             | `string` | `'More info'` |
| `projButtonUrl`  | `proj-button-url`  |             | `string` | `undefined`   |
| `projImg`        | `proj-img`         |             | `string` | `undefined`   |
| `projImgAlt`     | `proj-img-alt`     |             | `string` | `undefined`   |
| `projImgLegenda` | `proj-img-legenda` |             | `string` | `undefined`   |
| `projText`       | `proj-text`        |             | `string` | `'Text'`      |
| `projTitle`      | `proj-title`       |             | `string` | `'Title'`     |


## Dependencies

### Used by

 - [mnv-expositor](..\mnv-expositor)

### Depends on

- [mnv-title](..\..\..\typography\mnv-title)
- [mnv-paragraph](..\..\..\typography\mnv-paragraph)
- [mnv-button](..\..\..\inputs\mnv-button)

### Graph
```mermaid
graph TD;
  mnv-projeto --> mnv-title
  mnv-projeto --> mnv-paragraph
  mnv-projeto --> mnv-button
  mnv-title --> mnv-overline
  mnv-expositor --> mnv-projeto
  style mnv-projeto fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
