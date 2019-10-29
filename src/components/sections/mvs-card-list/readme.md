# mvs-card-list



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                                                                                   | Default |
| -------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------ | ------- |
| `data`   | --        |             | `{ overline: string; title: string; subtitle: string; text: string; button: string; link: string; }[]` | `cards` |


## Dependencies

### Depends on

- [mvs-grid](../../layout/mvs-grid)
- [mvs-card-expander](../../layout/mvs-card-expander)

### Graph
```mermaid
graph TD;
  mvs-card-list --> mvs-grid
  mvs-card-list --> mvs-card-expander
  mvs-card-expander --> mvs-grid
  mvs-card-expander --> mvs-paragraph
  mvs-card-expander --> mvs-title
  mvs-card-expander --> mvs-anchor
  style mvs-card-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
