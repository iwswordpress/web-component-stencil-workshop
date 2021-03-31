# my-component



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `countryProp` | `country-prop` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [form-entry](../form-entry)
- [iws-get-latest-posts](../iws-get-latest-posts)

### Graph
```mermaid
graph TD;
  iws-get-data --> form-entry
  iws-get-data --> iws-get-latest-posts
  iws-get-latest-posts --> uc-spinner
  style iws-get-data fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
