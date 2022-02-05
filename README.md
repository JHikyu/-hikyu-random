# Random

Get random 🎲 things the easy way.
Simple, quick and light 🤏

📂 Zipped under 2kb with updates.

![](https://img.shields.io/bundlephobia/min/@hikyu/random?style=flat-square)
![](https://img.shields.io/npm/dw/@hikyu/random?style=flat-square)
![](https://img.shields.io/github/last-commit/jhikyu/-hikyu-random?style=flat-square)

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
- [Misc 🤨](#misc)
    - [Template 🔨](#template)
    - [Colors](#color---rgb)
    - [Emoji](#emoji)
    - [Dice 🎲](#dice-🎲)
    - [Bits and Bytes](#byte)

### Numbers 🔢

#### Digit

```js
// Random number from 0 to 9
digit(); // > 8

// Random number from 0 to 4
digit(4); // > 1
```

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

#### Boolean

```js
// Generates either true or false
boolean(); // > false
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

### Misc 🤨

#### Template
| Meaning | Charcode | Outputs                 |
|---------|----------|-------------------------|
| Any     | a        | Any of the below        |
| Char    | c        | Lowercase char          |
| Char    | C        | Uppercase char          |
| Char    | s        | Upper or lowercase char |
| Digit   | d        | Digit 0-9               |
| Digit   | 0-9      | Digit up to value       |
```js
// Generate template string
template('aaaaa'); // > "6qxsF"
template('ccccc'); // > "htcfi"
template('CCCCC'); // > "UNHCG"
template('sssss'); // > "ZaSrV"
template('ddddd'); // > "54628"
template('00033'); // > "00031"

// Password example
template('sdssdssdsssdd'); // > d5pi7tI7vWr85

// Byte example
template('1111 1111'); // > 0101 1101

// Telephone example
template('ddd-ddd-dddd'); // > 607-321-8576
```

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
hex(); // > "#6c7ac4"
```

#### Color - HSL
```js
// Random HSL color as string
hsl(); // > "hsl(153, 44%, 64%)"
```

#### Emoji
```js
// Random Emoji
emoji(); // > "🚀"
```

#### Dice 🎲
```js
// Generate 3 values from 1 to 20
dice(20, 3); // > [ 2, 7, 11 ]
```

#### Byte
```js
// Generate 3 values from 1 to 20
byte(); // > "0101 1110"
```

#### Bit
```js
// Generate 0 or 1
bit(); // > 0
```