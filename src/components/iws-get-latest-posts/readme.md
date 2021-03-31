# iws-wordpress



<!-- Auto Generated Below -->


## Events

| Event             | Description | Type                  |
| ----------------- | ----------- | --------------------- |
| `iwsPostSelected` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [iws-get-data](../iws-get-data)

### Depends on

- [uc-spinner](../spinner)

### Graph
```mermaid
graph TD;
  iws-get-latest-posts --> uc-spinner
  iws-get-data --> iws-get-latest-posts
  style iws-get-latest-posts fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
