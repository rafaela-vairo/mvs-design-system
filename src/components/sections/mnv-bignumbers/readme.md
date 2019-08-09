# mnv-bignumbers



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type    | Default     |
| ------------ | --------- | ----------- | ------- | ----------- |
| `setNumbers` | --        |             | `any[]` | `undefined` |


## Dependencies

### Used by

 - [app-heropage](..\..\app-pages\app-heropage)

### Depends on

- [mnv-grid](..\..\layout\mnv-grid)
- [mnv-title](..\..\typography\mnv-title)
- [mnv-bignumber](mnv-bignumber)

### Graph
```mermaid
graph TD;
  mnv-bignumbers --> mnv-grid
  mnv-bignumbers --> mnv-title
  mnv-bignumbers --> mnv-bignumber
  mnv-title --> mnv-overline
  mnv-bignumber --> mnv-grid
  app-heropage --> mnv-bignumbers
  style mnv-bignumbers fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
