# Random

Get random 🎲 things the easy way.
Simple, quick and light 🤏

📂 Zipped under 5kb with updates.
| index.js    | index.min.js |
| ----------- | ------------ |
| 2,36 KB     | 1017 Bytes   |

## Install

```bash
npm i @hikyu/random
```

## Usage

I will use the deconstructed 🚧 require for demonstration
```js
// Simple require
const random = require('@hikyu/random');
random.number(1, 10); // > 4

// Deconstructed require with custom names
const { number: ranNumber } = require('@hikyu/random');
ranNumber(1, 10); // > 4

// Deconstructed require
const { number, index, value, .. } = require('@hikyu/random');
number(1, 10); // > 4
```

## Functions
- [Numbers 🔢](#numbers)
- [Arrays 📃](#array)
    - [Index of array](#index-of-array)
    - [Value of array](#value-of-array)
    - [Dice 🎲](#dice-🎲)
- [Misc 🤨](#misc)
    - [Colors](#color---rgb)
    - [Emoji](#emoji)

### Numbers 🔢

#### Integer

```js
// Random integer from 1 to 10
number(1, 10); // > 4
```

#### Decimal number

```js
// Random number from 1 to 10 with 2 decimal spaces
number(1, 10, 2); // > 5.19
```

### Array 📃

#### Index of array
```js
// Random index out of the array
index(["hello", "world", 1]); // > 1
```

#### Value of array
```js
// Random value out of the array
value("hello", "world", 1); // > "hello"
```

#### Dice 🎲
```js
// Generate array of length x of random numbers
dice(20, 3); // > [ 2, 7, 11 ]
```

### Misc 🤨

#### Color - RGB
```js
// Random RGB color as string
rgb(); // > "rgb(66, 193, 254)"
```

#### Color - RGBA
```js
// Random RGB color as string
rgba(); // > "rgba(251, 41, 72, 0.47)"
```

#### Color - HEX
```js
// Random RGB color as string
hex(); // > "#6c7ac"
```

#### Emoji
```js
// Random Emoji
emoji(); // > "🚀"
```