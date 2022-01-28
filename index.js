/**
 * Generates random Number
 * @param {Number} min 
 * @param {Number} max 
 * @param {Number} decimal
 * @returns {Number}
 */
function number(min, max, decimal = 0) {
    let precision = Math.pow(10, decimal);
    // random number between min and max
    if(decimal != 0)
        return Math.floor((Math.random() * (max - min) + min) * precision) / precision;

    return Math.floor(Math.random() * (max+1 - min) ) + min;
    //! nicht zu hoch
}


function digit() {
    // random number from 0 to 9 with math random
    return Math.floor(Math.random() * 10);
}

 
/**
 * Index of array
 * @param {Array} array
 * @returns {Number}
 */
function index(array) {
    return number(0, array.length-1);
}

/**
 * Value of array
 * @param {Array} array
 * @returns {any}
 */
 function value(array) {
    return array[index(array)];
}

/**
 * RGB color
 * @returns {String}
 */
 function rgb() {
    return `rgb(${number(0, 255)}, ${number(0, 255)}, ${number(0, 255)})`;
}

/**
 * RGBA color
 * @returns {String}
 */
 function rgba() {
    return `rgba(${number(0, 255)}, ${number(0, 255)}, ${number(0, 255)}, ${number(0, 1, 2)})`;
}

/**
 * HEX color
 * @returns {String}
 */
function hex() {
    return `#${number(0, 255).toString(16)}${number(0, 255).toString(16)}${number(0, 255).toString(16)}`;
}

/**
 * Emoji
 * @returns {String}
 */
function emoji() {
    // Thanks to https://gist.github.com/liquidx/0eef9275131b3d27d1750ff13da5be89

    var emojis = '👍'; 
    var separator = '|';
    var emojiRange = [
      [0x261D, 0x261D],
      [0x270A, 0x270D], 
      [0x1F300, 0x1F320],
      [0x1F324, 0x1F4FF],
      [0x1F500, 0x1F53D],
      [0x1F549, 0x1F579],
      [0x1F57A, 0x1F57A],
      [0x1F590, 0x1F590],
      [0x1F595, 0x1F596],
      [0x1f600, 0x1F6D2], 
      [0x1F910, 0x1F94C],
      [0x1F950, 0x1F9E6],
    ];
    
    for (var i = 0; i < emojiRange.length; i++) {
        var range = emojiRange[i];
        for (var x = range[0]; x < range[1]; x++) {
            emojis += separator + String.fromCodePoint(x);
        }
    }
    return value(emojis.split('|'));
}


/**
 * Dice
 * @param {Number} sides
 * @param {Number} amount
 * @returns {Array}
 */
 function dice(sides, amount) {
     let arr = [];
     for(let i = 0 ; i < amount; i++)
        arr.push(number(1, sides));
    return arr;
}


module.exports = {
    number,
    index,
    value,
    rgb,
    rgba,
    hex,
    emoji,
    dice
};