# mnv-footer



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type          | Default     |
| ----------- | --------- | ----------- | ------------- | ----------- |
| `locations` | --        |             | `locations[]` | `undefined` |


## Dependencies

### Used by

 - [app-heropage](..\..\app-pages\app-heropage)

### Depends on

- [mnv-grid](..\..\layout\mnv-grid)
- [mnv-title](..\..\typography\mnv-title)
- [mnv-paragraph](..\..\typography\mnv-paragraph)

### Graph
```mermaid
graph TD;
  mnv-footer --> mnv-grid
  mnv-footer --> mnv-title
  mnv-footer --> mnv-paragraph
  mnv-title --> mnv-overline
  app-heropage --> mnv-footer
  style mnv-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
