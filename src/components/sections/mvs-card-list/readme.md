# mvs-card-list



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                                                                                   | Default |
| -------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------ | ------- |
| `data`   | --        |             | `{ overline: string; title: string; subtitle: string; text: string; button: string; link: string; }[]` | `cards` |


## Dependencies

### Depends on

- [mvs-flexgrid](../../layout/mvs-flexgrid)
- [mvs-card](../../layout/mvs-card)

### Graph
```mermaid
graph TD;
  mvs-card-list --> mvs-flexgrid
  mvs-card-list --> mvs-card
  mvs-card --> mvs-overline
  mvs-card --> mvs-title
  mvs-card --> mvs-subtitle
  mvs-card --> mvs-paragraph
  mvs-card --> mvs-button
  style mvs-card-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
