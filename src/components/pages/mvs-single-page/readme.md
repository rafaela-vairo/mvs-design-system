# mvs-single-page



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type  | Default     |
| --------- | --------- | ----------- | ----- | ----------- |
| `data`    | `data`    |             | `any` | `undefined` |
| `numbers` | `numbers` |             | `any` | `undefined` |


## Dependencies

### Depends on

- [mvs-base](../../layout/mvs-base)
- [mvs-navbar](../../navigation/mvs-navbar)
- [mvs-hero](../../layout/mvs-hero)
- [mvs-bg](../../layout/mvs-bg)
- [mvs-about](../../sections/mvs-about)
- [mvs-big-number](../../layout/mvs-big-number)
- [mvs-footer](../../sections/mvs-footer)

### Graph
```mermaid
graph TD;
  mvs-single-page --> mvs-base
  mvs-single-page --> mvs-navbar
  mvs-single-page --> mvs-hero
  mvs-single-page --> mvs-bg
  mvs-single-page --> mvs-about
  mvs-single-page --> mvs-big-number
  mvs-single-page --> mvs-footer
  mvs-navbar --> mvs-navbutton
  mvs-navbar --> mvs-mob-button
  mvs-navbar --> mvs-mob-drawer
  mvs-hero --> mvs-flexgrid
  mvs-hero --> mvs-title
  mvs-hero --> mvs-button
  mvs-hero --> mvs-countdown
  mvs-countdown --> mvs-title
  mvs-about --> mvs-flexgrid
  mvs-about --> mvs-title
  mvs-about --> mvs-paragraph
  mvs-big-number --> mvs-flexgrid
  mvs-big-number --> mvs-title
  mvs-big-number --> mvs-paragraph
  mvs-big-number --> mvs-strong
  mvs-footer --> mvs-flexgrid
  mvs-footer --> mvs-paragraph
  mvs-footer --> mvs-strong
  style mvs-single-page fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
