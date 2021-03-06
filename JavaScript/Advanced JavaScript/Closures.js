// => CLOSURES -

// => What is a closure?
// - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// - Closures are an extremely powerful property of JavaScript (and most programming languages).
// - As defined on MDN: Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure ‘remembers’ the environment in which it was created.
// - Note: Free variables are variables that are neither locally declared nor passed as parameter.

//
// - Example 1 -
// function numberGenerator() {
//
// Local "free" variable that ends up within the closure
//   var num = 1;
//   function checkNumber() {
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// }
// var number = numberGenerator();
// number();
// 2

// - In the example above, the function numberGenerator creates a local “free” variable num (a number) and checkNumber (a function which prints num to the console).
// - The function checkNumber doesn’t have any local variables of its own — however, it does have access to the variables within the outer function, numberGenerator, because of a closure.
// - Therefore, it can use the variable num declared in numberGenerator to successfully log it to the console even after numberGenerator has returned.

// - Example 2 -
// - In this example we'll demonstrate that a closure contains any and all local variables that were declared inside the outer enclosing function.
// function sayHello() {
//   var say = function() { console.log(hello); }
//
// Local variable that ends up within the closure
//   var hello = 'Hello, world!';
//   return say;
// }
// var sayHelloClosure = sayHello();
// sayHelloClosure();
// ‘Hello, world!’

// - Notice how the variable hello is defined after the anonymous function — but can still access the hello variable. This is because the hello variable has already been defined in the function “scope” at the time of creation, making it available when the anonymous function is finally executed.

// NOTE:
// 1. Every function has access to the Variable Environment of the Execution Context in which it which created. To put it more simple, Every function remembers all the variables created in its birthplace or its Lexical Environment.
// 2. Closure: A closure is a function that accesses its lexical scope even executed outside of its lexical scope.

// - Example 3 -
// var x = 10;
// function foo(a) {
//   var b = 20;
//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }
//   function boop(e) {
//     return e * -1;
//   }
//   return bar;
// }
// var moar = foo(5);
// Closure
// /*
//   The function below executes the function bar which was returned
//   when we executed the function foo in the line above. The function bar
//   invokes boop, at which point bar gets suspended and boop gets push
//   onto the top of the call stack (see the screenshot below)
// *
/// moar(15);

// - Example - 4
// const secureBooking = function () {
//   let passengerCount = 0;

//   console.log(passengerCount);
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };

// const booking = secureBooking();
// booking();
// 1 passenger
// booking();
// 2 passenger
// booking();
// 3 passenger

// const newBooking = secureBooking();
// newBooking();
// 1 passenger
// booking();
// 4 passenger
// console.dir(booking);
// console.dir(newBooking);

// Note: This proves that every closure has its own copy of the variable environment as even though we secured a booking with newBooking(); our older booking(); method still retains the older value of passengerCount

// --------------------------------------------------------------------------------------------------------------------
// =>  EXECUTION CONTEXT  -

// - At any point in time, there can only be one execution context running. That's why JavaScript is "single threaded," meaning only one command can be processed at a time.
// - Typically, browsers maintain this execution context using a "stack." A stack is a Last In First Out (LIFO) data structure, meaning the last thing that you pushed onto the stack is the first thing that gets popped off it. (This is because we can only insert or delete elements at the top of the stack.)
// - The current or “running” execution context is always the top item in the stack. It gets popped off the top when the code in the running execution context has been completely evaluated, allowing the next top item to take over as running execution context.
// - Moreover, just because an execution context is running doesn't mean that it has to finish running before a different execution context can run.
// - There are times when the running execution context is suspended and a different execution context becomes the running execution context. The suspended execution context might then at a later point pick back up where it left off.
// - Any time one execution context is replaced by another like this, a new execution context is created and pushed onto the stack, becoming the current execution context.
// - And whenever we have a bunch of execution contexts running one after another — often being paused in the middle and then later resumed — we need some way to keep track of state so we can manage the order and execution of these contexts.
// - As per the ECMAScript spec, each execution context has various state components that are used to keep track of the progress the code in each context has made. These include:
// - Code evaluation state: Any state needed to perform, suspend, and resume evaluation of the code associated with this execution context
// - Function: The function object which the execution context is evaluating (or null if the context being evaluated is a script or module)
// - Realm: A set of internal objects, an ECMAScript global environment, all of the ECMAScript code that is loaded within the scope of that global environment, and other associated state and resources
// - Lexical Environment: Used to resolve identifier references made by code within this execution context.
// - Variable Environment: Lexical Environment whose EnvironmentRecord holds bindings created by VariableStatements within this execution context.

// -------------------------------------------------------------------------------------------------------------------
// => LEXICAL ENVIRONMENT -

// - A Lexical Environment is -
// 1. "Used to define the association of Identifiers": The purpose of a Lexical Environment is to manage data (i.e. identifiers) within code. In other words, it gives meaning to identifiers. For instance, if we had a line of code “console.log(x / 10)”, it's meaningless to have a variable (or “identifier”) x without something that provides meaning for that variable. The Lexical Environments provides this meaning (or “association”) via its Environment Record (see below).
// 2. "Lexical Environment consists of an Environment Record": An Environment Record is a fancy way to say that it keeps a record of all identifiers and their bindings that exist within a Lexical Environment. Every Lexical Environment has it's own Environment Record.
// 3. "Lexical nesting structure": This is the interesting part, which is basically saying that an inner environment references the outer environment that surrounds it, and that this outer environment can have its own outer environment as well. As a result, an environment can serve as the outer environment for more than one inner environment. The global environment is the only Lexical environment that does not have an outer environment. The language here is tricky, so let’s use a metaphor and think of lexical environments like layers of an onion: the global environment is the outermost layer of the onion; every subsequent layer below is nested within
//  4. "A new Lexical Environment is created each time such code is evaluated": Each time an enclosing outer function is called, a new lexical environment is created. This is important — we’ll come back to this point again at the end. (Side note: a function is not the only way to create a Lexical Environment. Others include a block statement or a catch clause.)

// NOTE:
// - In short, every execution context has a Lexical Environment. This Lexical environments holds variables and their associated values, and also has a reference to its outer environment.

// -------------------------------------------------------------------------------------------------------------------
// => SCOPE FOR CLOSURE -

// - This scope chain, or chain of environments associated with a function, is saved to the function object at the time of its creation. In other words, it's defined statically by location within the source code. (This is also known as "lexical scoping".)

// => Dynamic Scope(Scope Chain) vs. Static Scope(Or Lexical Scope) -

// - Dynamic scoped languages have "stack-based implementations", meaning that the local variables and arguments of functions are stored on a stack. Therefore, the runtime state of the program stack determines what variable you are referring to.
// - On the other hand, static scope is when the variables referenced in a context are recorded at the time of creation. In other words, the structure of the program source code determines what variables you are referring to.

// - Example -
// var x = 10;
// function foo() {
//   var y = x + 5;
//   return y;
// }
// function bar() {
//   var x = 2;
//   return foo();
// }
// function main() {
//   foo();
// Static scope: 15; Dynamic scope: 15
//   bar();
// Static scope: 15; Dynamic scope: 7
//   return 0;
// }

// NOTE: So the Lexical Scope(Static Scope) and Closure has priority over the Scope Chain. So the above example will return the Static Scope result in the console.
