## Description

Water Jug challenge Application Version 0.1.0

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## How to Use
To use this application, you need to make a POST request to the following endpoint:


```bash
/water-jug/solve
```
The payload for the POST request should be a JSON object with the following format:

```bash

{
  "x": <initial volume of jug X in milliliters>,
  "y": <initial volume of jug Y in milliliters>,
  "z": <desired volume of jug Z in milliliters>
}
```

For example, if you want to solve the classic water jug problem where jug X has a capacity of 3 liters, jug Y has a capacity of 5 liters, and the desired volume is 4 liters, the payload would look like this:
```bash
{
  "x": 2,
  "y": 98,
  "z": 100
}
```

Upon receiving a valid request, the application will return a JSON array of objects, where each object represents a step in the solution. The format of each object is as follows:
```bash
{
  "x": <new volume of jug X in milliliters>,
  "y": <new volume of jug Y in milliliters>,
  "operation": <description of the operation performed>,
  "steps": <number of steps taken so far>
}
```

For example, the solution to the problem above might look like this:
```bash
[
    {
        "x": 0,
        "y": 100,
        "operation": "Empty X",
        "steps": 1
    },
    {
        "x": 2,
        "y": 98,
        "operation": "Transfer X to Y",
        "steps": 2
    },
    {
        "x": 2,
        "y": 98,
        "operation": "Solved",
        "steps": 3
    }
]
```

In this example, the solution is achieved in 3 steps. The "Solved" object indicates that the desired volume of water can be obtained by leaving 2 liters of water in jug X and 98 water in jug Y.

## License

Nest is [MIT licensed](LICENSE).