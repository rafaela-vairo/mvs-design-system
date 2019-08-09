# mnv-expositor



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type     | Default     |
| ----------------- | ------------------ | ----------- | -------- | ----------- |
| `projects`        | `projects`         |             | `any`    | `undefined` |
| `sectionSubtitle` | `section-subtitle` |             | `string` | `undefined` |
| `sectionTitle`    | `section-title`    |             | `string` | `undefined` |
| `spotlight`       | `spotlight`        |             | `any`    | `undefined` |
| `spotlightAlt`    | `spotlight-alt`    |             | `string` | `undefined` |


## Dependencies

### Used by

 - [mnv-expositor-base](..\mnv-expositor-base)

### Depends on

- [mnv-grid](..\..\..\layout\mnv-grid)
- [mnv-title](..\..\..\typography\mnv-title)
- [mnv-projeto](..\mnv-projeto)

### Graph
```mermaid
graph TD;
  mnv-expositor --> mnv-grid
  mnv-expositor --> mnv-title
  mnv-expositor --> mnv-projeto
  mnv-title --> mnv-overline
  mnv-projeto --> mnv-title
  mnv-projeto --> mnv-paragraph
  mnv-projeto --> mnv-button
  mnv-expositor-base --> mnv-expositor
  style mnv-expositor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
