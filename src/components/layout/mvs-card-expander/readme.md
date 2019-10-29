# mvs-card-expander



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default                                                                   |
| ----------- | ----------- | ----------- | -------- | ------------------------------------------------------------------------- |
| `alt`       | `alt`       |             | `string` | `'Texto alternativo em falta, favor entrar em contato'`                   |
| `cardtitle` | `cardtitle` |             | `string` | `undefined`                                                               |
| `link`      | `link`      |             | `string` | `'http://google.com'`                                                     |
| `media`     | `media`     |             | `string` | `'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'` |
| `overline`  | `overline`  |             | `any`    | `undefined`                                                               |
| `subtitle`  | `subtitle`  |             | `string` | `undefined`                                                               |
| `text`      | `text`      |             | `string` | `undefined`                                                               |


## Dependencies

### Used by

 - [mvs-card-list](../../sections/mvs-card-list)

### Depends on

- [mvs-grid](../mvs-grid)
- [mvs-paragraph](../../typography/mvs-paragraph)
- [mvs-title](../../typography/mvs-title)
- [mvs-anchor](../../typography/mvs-anchor)

### Graph
```mermaid
graph TD;
  mvs-card-expander --> mvs-grid
  mvs-card-expander --> mvs-paragraph
  mvs-card-expander --> mvs-title
  mvs-card-expander --> mvs-anchor
  mvs-card-list --> mvs-card-expander
  style mvs-card-expander fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
