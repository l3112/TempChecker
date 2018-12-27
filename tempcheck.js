// kelvin is 293
const kelvin = 293
// change the value of kelvin to check the temperature!


// but Celcius is 273 degrees less - 20*c!
// so remove 273
var celcius = kelvin - 273
var Newton = celcius * (33/100)

// not 451
// no g in fahrenheit
fahrenheit = celcius * (9/5) + 32
// round down to the floor w/ a decimal
fahrenheit = Math.floor(fahrenheit);
Newton = Math.floor(Newton);

console.log(`The Temprature is ${fahrenheit} degrees Fahrenheit`)

console.log(`The Temprature is ${Newton} degrees Newton`)