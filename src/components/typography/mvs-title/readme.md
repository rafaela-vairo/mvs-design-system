# mvs-title

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                         | Type                                                      | Default     |
| ---------- | ---------- | ------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| `color`    | `color`    | Define texto de cor branca, para fundos escuros.                    | `"dark" \| "light" \| "primary" \| "secondary"`           | `undefined` |
| `level`    | `level`    | Define estilo de título a ser usado pelo componente.                | `"t1" \| "t2" \| "t3" \| "t4" \| "t5" \| "t6" \| boolean` | `undefined` |
| `override` | `override` | Sobreescreve o tag html definido automaticamente.                   | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| boolean`                   | `undefined` |
| `rank`     | `rank`     | Propriedade interna que define automaticamente a tag H a ser usada. | `number`                                                  | `6`         |


## Dependencies

### Used by

 - [mvs-about](../../sections/mvs-about)
 - [mvs-big-number](../../layout/mvs-big-number)
 - [mvs-card](../../layout/mvs-card)
 - [mvs-card-expander](../../layout/mvs-card-expander)
 - [mvs-contact-list](../../layout/mvs-contact-list)
 - [mvs-countdown](../../layout/mvs-countdown)
 - [mvs-hero](../../layout/mvs-hero)
 - [mvs-navigation](../../layout/mvs-navigation)
 - [mvs-questions-common](../../layout/mvs-questions-common)

### Graph
```mermaid
graph TD;
  mvs-about --> mvs-title
  mvs-big-number --> mvs-title
  mvs-card --> mvs-title
  mvs-card-expander --> mvs-title
  mvs-contact-list --> mvs-title
  mvs-countdown --> mvs-title
  mvs-hero --> mvs-title
  mvs-navigation --> mvs-title
  mvs-questions-common --> mvs-title
  style mvs-title fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
