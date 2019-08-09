# mnv-about



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `mainText`  | `main-text`  |             | `string` | `undefined` |
| `mainTitle` | `main-title` |             | `string` | `undefined` |


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
  mnv-about --> mnv-grid
  mnv-about --> mnv-title
  mnv-about --> mnv-paragraph
  mnv-title --> mnv-overline
  app-heropage --> mnv-about
  style mnv-about fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
