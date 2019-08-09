# mnv-list-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `data`   | `data`    |             | `any`    | `undefined` |
| `name`   | `name`    |             | `string` | `undefined` |


## Dependencies

### Used by

 - [app-heropage](..\..\app-pages\app-heropage)

### Depends on

- [mnv-grid](..\..\layout\mnv-grid)
- [mnv-title](..\..\typography\mnv-title)
- [mnv-card](..\..\layout\mnv-card)

### Graph
```mermaid
graph TD;
  mnv-list-card --> mnv-grid
  mnv-list-card --> mnv-title
  mnv-list-card --> mnv-card
  mnv-title --> mnv-overline
  mnv-card --> mnv-title
  mnv-card --> mnv-subtitle
  mnv-card --> mnv-divider
  mnv-card --> mnv-paragraph
  mnv-card --> mnv-button
  app-heropage --> mnv-list-card
  style mnv-list-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
