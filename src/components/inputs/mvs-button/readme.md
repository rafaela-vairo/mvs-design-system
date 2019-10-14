# mvs-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                    | Type                               | Default    |
| ---------- | ---------- | ---------------------------------------------- | ---------------------------------- | ---------- |
| `disabled` | `disabled` | Caso `true`, desabilita o botão.               | `boolean`                          | `false`    |
| `full`     | `full`     | Caso `true`, botão terá largura 100%.          | `boolean`                          | `false`    |
| `light`    | `light`    | Caso `true`, botão terá tema light/night mode. | `boolean`                          | `false`    |
| `type`     | `type`     | Define o tipo do botão.                        | `"button" \| "reset" \| "submit"`  | `'button'` |
| `variant`  | `variant`  | Define estilo do botão.                        | `"contained" \| "flat" \| "ghost"` | `'flat'`   |


## Dependencies

### Used by

 - [mvs-card](../../layout/mvs-card)
 - [mvs-card-expander](../../mvs-card-expander)
 - [mvs-hero](../../layout/mvs-hero)

### Graph
```mermaid
graph TD;
  mvs-card --> mvs-button
  mvs-card-expander --> mvs-button
  mvs-hero --> mvs-button
  style mvs-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
