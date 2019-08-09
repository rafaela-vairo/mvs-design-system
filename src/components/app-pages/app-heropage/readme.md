# app-heropage

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type           | Default     |
| --------- | --------- | ----------- | -------------- | ----------- |
| `data`    | `data`    |             | `any`          | `undefined` |
| `match`   | --        |             | `MatchResults` | `undefined` |
| `numbers` | `numbers` |             | `any`          | `undefined` |


## Dependencies

### Depends on

- [mnv-base](..\..\layout\mnv-base)
- [mnv-navbar](..\..\navigation\menu-desktop\mnv-navbar)
- [mnv-mob-menu](..\..\navigation\menu-mobile\mnv-mob-menu)
- [mnv-hero](..\..\sections\mnv-hero)
- [mnv-bg](..\..\layout\mnv-bg)
- [mnv-about](..\..\sections\mnv-about)
- [mnv-bignumbers](..\..\sections\mnv-bignumbers)
- [mnv-expositor-base](..\..\sections\expositor\mnv-expositor-base)
- [mnv-list-card](..\..\sections\mnv-list-card)
- [mnv-footer](..\..\sections\mnv-footer)

### Graph
```mermaid
graph TD;
  app-heropage --> mnv-base
  app-heropage --> mnv-navbar
  app-heropage --> mnv-mob-menu
  app-heropage --> mnv-hero
  app-heropage --> mnv-bg
  app-heropage --> mnv-about
  app-heropage --> mnv-bignumbers
  app-heropage --> mnv-expositor-base
  app-heropage --> mnv-list-card
  app-heropage --> mnv-footer
  mnv-navbar --> mnv-navbutton
  mnv-mob-menu --> mnv-mob-button
  mnv-mob-menu --> mnv-mob-drawer
  mnv-hero --> mnv-grid
  mnv-hero --> mnv-title
  mnv-hero --> mnv-button
  mnv-title --> mnv-overline
  mnv-about --> mnv-grid
  mnv-about --> mnv-title
  mnv-about --> mnv-paragraph
  mnv-bignumbers --> mnv-grid
  mnv-bignumbers --> mnv-title
  mnv-bignumbers --> mnv-bignumber
  mnv-bignumber --> mnv-grid
  mnv-expositor-base --> mnv-expositor
  mnv-expositor --> mnv-grid
  mnv-expositor --> mnv-title
  mnv-expositor --> mnv-projeto
  mnv-projeto --> mnv-title
  mnv-projeto --> mnv-paragraph
  mnv-projeto --> mnv-button
  mnv-list-card --> mnv-grid
  mnv-list-card --> mnv-title
  mnv-list-card --> mnv-card
  mnv-card --> mnv-title
  mnv-card --> mnv-subtitle
  mnv-card --> mnv-divider
  mnv-card --> mnv-paragraph
  mnv-card --> mnv-button
  mnv-footer --> mnv-grid
  mnv-footer --> mnv-title
  mnv-footer --> mnv-paragraph
  style app-heropage fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
