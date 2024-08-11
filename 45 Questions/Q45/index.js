"use strict";
/*
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
function carInfo(manufacturer, model, ...extraother) {
    let car = Object.assign({ manufacturer,
        model }, Object.assign({}, ...extraother));
    return car;
}
console.log(carInfo("Audi", "e-tron GT", { Color: "Tango Red metallic" }, { Year: 2024 }, { Price: " $ 147,100" }));
console.log(carInfo("Honda", "Civic", { Color: "Jet Black" }, { Year: 2024 }, { Price: "$ 36,500" }));
