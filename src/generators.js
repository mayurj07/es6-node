/**
 * Created by mayujain on 1/6/17.
 */

//Generators allow you to delay execution until you call them.

function* greet() {

    console.log("Generators are lazy");
    yield "How";

    console.log("I'm not called until the second next is called");
    yield "are";

    console.log("Call me before 'you'?");
    yield "you";

    console.log("Called when done!!")
}

console.log(greet());   //GeneratorFunctionPrototype { _invoke: [Function: invoke] }

console.log(typeof greet());    //object

var greeter = greet();

console.log(greeter.next());
/*
 Generators are lazy
 { value: 'How', done: false }
*/

console.log(greeter.next());
/*
 I'm not called until the second next is called
 { value: 'are', done: false }
 */

console.log(greeter.next());
/*
 Call me before 'you'?
 { value: 'you', done: false }
 */

console.log(greeter.next());
/*
 Called when done!!
 { value: undefined, done: true }
*/

var greeter2 = greet();

for(let word of greeter2){
    console.log(word);
}
/*
Generators are lazy
How
I'm not called until the second next is called
are
Call me before 'you'?
you
Called when done!!
*/

/*****************************************************/

function* genr() {
    console.log("\nCalled next");
    let val1 = yield "One";

    console.log(`got val1: ${val1} from next()`);
    let val2 = yield "Two";

    console.log(`got val2: ${val2} from next()`);
    console.log(`now val1 + val2 = ${val1 + val2}`)
    yield val1 + val2 ;
}

var generator = genr();
console.log(generator.next().value);
console.log(generator.next(1).value);
console.log(generator.next(2));
console.log(generator.next());

/*

Called next
One
got val1: 1 from next()
Two
got val2: 2 from next()
now val1 + val2 = 3
{ value: 3, done: false }
{ value: undefined, done: true }

*/
