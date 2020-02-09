# Mini GraphQL API 

A sample project demonstrating a basic implementation for GraphQL API. For fun, this API is about 12 Chinese zodiac animals. 

Please note that the presenting data is designed for demostration only, and should not be used for any other purposes.

## Demonstrations

- GraphQL Server with Express Setup
- Scalar Data Types
- Splitting Schema with Dynamic Files Loads
- Schema Extension
- Directives

## Getting Started

Install the depedenencies and start the GraphQL server

```bash
$ npm install
$ npm start
```

## Example Query

Search Zodiac animal for year 2020.

POST body:

```json
query ($input: AnimalInput) {
  animal(input: $input) {
    name
    chinese
    hoursOfDay {
      name
      chinese
      description
    }
  }
}
```

Query Variables:
```json
{
  "input" : {
    "year": 2020
	}
}
```