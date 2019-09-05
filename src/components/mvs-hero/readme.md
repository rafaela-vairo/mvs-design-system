# mvs-hero



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type     | Default                                                                                                          |
| ------------ | ------------ | ----------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `background` | `background` |             | `string` | `undefined`                                                                                                      |
| `bgimg`      | `bgimg`      |             | `string` | `'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'` |
| `button`     | `button`     |             | `string` | `undefined`                                                                                                      |
| `herotitle`  | `herotitle`  |             | `string` | `undefined`                                                                                                      |


## Dependencies

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
  style mvs-hero fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
