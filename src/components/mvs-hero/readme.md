# mvs-hero



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type     | Default                                                                          |
| ------------ | ------------ | ----------- | -------- | -------------------------------------------------------------------------------- |
| `background` | `background` |             | `string` | `undefined`                                                                      |
| `bgimg`      | `bgimg`      |             | `string` | `'https://admin.100anos.ufrj.br/wp-content/uploads/sites/3/2019/09/100anos.png'` |
| `button`     | `button`     |             | `string` | `undefined`                                                                      |
| `herotitle`  | `herotitle`  |             | `string` | `undefined`                                                                      |


## Dependencies

### Used by

 - [mvs-single-page](../pages/mvs-single-page)

### Depends on

- [mvs-flexgrid](../layout/mvs-flexgrid)
- [mvs-title](../typography/mvs-title)
- [mvs-button](../inputs/mvs-button)
- [mvs-countdown](../layout/mvs-countdown)

### Graph
```mermaid
graph TD;
  mvs-hero --> mvs-flexgrid
  mvs-hero --> mvs-title
  mvs-hero --> mvs-button
  mvs-hero --> mvs-countdown
  mvs-countdown --> mvs-title
  mvs-single-page --> mvs-hero
  style mvs-hero fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
