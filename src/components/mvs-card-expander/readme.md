# mvs-card-expander



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                 | Default                                                                   |
| ----------- | ----------- | ----------- | -------------------- | ------------------------------------------------------------------------- |
| `alt`       | `alt`       |             | `string`             | `'Texto alternativo em falta, favor entrar em contato'`                   |
| `button`    | `button`    |             | `string`             | `undefined`                                                               |
| `cardtitle` | `cardtitle` |             | `string`             | `undefined`                                                               |
| `link`      | `link`      |             | `string`             | `'http://google.com'`                                                     |
| `media`     | `media`     |             | `string`             | `'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'` |
| `open`      | `open`      |             | `"closed" \| "open"` | `'closed'`                                                                |
| `overline`  | `overline`  |             | `any`                | `undefined`                                                               |
| `subtitle`  | `subtitle`  |             | `string`             | `undefined`                                                               |
| `text`      | `text`      |             | `string`             | `undefined`                                                               |
| `width`     | `width`     |             | `number`             | `undefined`                                                               |


## Dependencies

### Used by

 - [mvs-card-list](../sections/mvs-card-list)

### Depends on

- [mvs-overline](../typography/mvs-overline)
- [mvs-title](../typography/mvs-title)
- [mvs-subtitle](../typography/mvs-subtitle)
- [mvs-paragraph](../typography/mvs-paragraph)
- [mvs-button](../inputs/mvs-button)

### Graph
```mermaid
graph TD;
  mvs-card-expander --> mvs-overline
  mvs-card-expander --> mvs-title
  mvs-card-expander --> mvs-subtitle
  mvs-card-expander --> mvs-paragraph
  mvs-card-expander --> mvs-button
  mvs-card-list --> mvs-card-expander
  style mvs-card-expander fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
