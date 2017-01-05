/**
 * Created by mayujain on 1/4/17.
 */

var greeting = function (message, name) {
    return message + name;
}

var arrowGreeting = (message, name) => {
    return message + name;
}

var arrowExpression = (message, name) => message + name;

var squared = x => x * x;


console.log(greeting("Hello ", "Mayur"));
console.log(arrowExpression("Hello ", "arrowExpression"));
console.log(`2 squared is ${squared(2)} `);