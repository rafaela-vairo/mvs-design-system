# mvs-navbar



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description | Type                                                          | Default                                                |
| ------------- | --------------- | ----------- | ------------------------------------------------------------- | ------------------------------------------------------ |
| `color`       | `color`         |             | `"default" \| "inherit" \| "primary" \| "secondary"`          | `'primary'`                                            |
| `lastScrollY` | `last-scroll-y` |             | `number`                                                      | `0`                                                    |
| `links`       | --              |             | `{ name: string; url: string; }[]`                            | `linkList`                                             |
| `logo`        | `logo`          |             | `string`                                                      | `'../assets/icon/ufrj-100-anos-branco-horizontal.svg'` |
| `open`        | `open`          |             | `boolean`                                                     | `false`                                                |
| `position`    | `position`      |             | `"absolute" \| "fixed" \| "relative" \| "static" \| "sticky"` | `'fixed'`                                              |
| `setClass`    | `set-class`     |             | `string`                                                      | `''`                                                   |


## Dependencies

### Used by

 - [mvs-single-page](../../pages/mvs-single-page)

### Depends on

- [mvs-navbutton](../mvs-navbutton)
- [mvs-mob-button](../mvs-mob-button)
- [mvs-mob-drawer](../mvs-mob-drawer)

### Graph
```mermaid
graph TD;
  mvs-navbar --> mvs-navbutton
  mvs-navbar --> mvs-mob-button
  mvs-navbar --> mvs-mob-drawer
  mvs-single-page --> mvs-navbar
  style mvs-navbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
