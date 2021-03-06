// --------------------------------------------------------------------------------------------------------------------
// => BUILDING AND DEPLOYING MODERN JS APPLICATIONS -

// - At least not when rebuilding a real world application. Instead, our project now needs to go through a build  process, where one big final JavaScript bundle is built. And that's the final file, which we will deploy to our web server for production.
// - So basically it's the JavaScript file, that will be sent to browsers in production. And production simply means that the application is being used by real users in the real world. Now, a build process can be something really complex
// - But to keep it simple it mainly include two steps -
//     - First Step - we'll bundle all our modules together into one big file. This is a pretty complex process which can eliminate unused code and compress or code as well. Now this step is super important for two big reasons - First, older browsers don't support modules at all. And so code that's in a module could not be executed by any older browser. And second, it's also better for performance to send less files to the browser, and it's also beneficial that the bundling step compresses our code.
//     - Second Step - we do something called Transpiling and Polyfilling, which is basically to convert all modern JavaScript syntax and features back to old ES5 syntax, so that even older browsers can understand our code without breaking. And this is usually done using a tool called Babel.
//     - So these are the two steps of our build process.
// - After these two steps, we end up with that final JavaScript bundle, ready to be deployed on a server for  production.
// - Now, of course we don't perform these steps ourselves. Instead, we use a special tool to implement this build process for us. And the most common build tools available, are probably - Webpack and Parcel. And these are called JavaScript Bundlers because well, as the name says they take our raw code and transform it into a JavaScript bundle.
// -These development tools are actually also available on NPM. So just like packages that we include in our code, we will download and manage tools using NPM as well. And these tools include the live-server that we've been using all along, the Parcel bundler that we just talked about or Babel to transpile code back to ES5.
// - So this is a high level overview, of how we develop Modern JavaScript applications today.

// ---------------------------------------------------------------------------------------------------------------------
// => MODULES -

// - As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.
// - For a long time, JavaScript existed without a language-level module syntax. That wasn’t a problem, because initially scripts were small and simple, so there was no need.
// - But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.

// => What is a Module -
// - Modules are reusable piece of code that encapsulates implementation details.
// - These Modules are usually A Standalone file, but it doesn't necessarily have to be this way.

// => JavaScript Modules (ES6 Modules)-
// - JavaScript has a native built-in module system from ES6. We did have modules before ES6, but we had to implement them ourselves or use external libraries.
// - A module is just a file. One script is one module. As simple as that. So there is exactly one module per file.
// - Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:
//   - "export" keyword labels variables and functions that should be accessible from outside the current module.
//   - "import" allows the import of functionality from other modules.
// - So just like we can export values in modules, we can usually also import values from other modules. And these other modules from which we import are then called Dependencies.

// => More Details -
// - Now, one great thing about modules is that we can also include 3rd-party modules into our own code.
// - And there are thousands of open source modules, which we also call packages, that developers share on the NPM repository. And we can then use these packages for free in our own code.
// - For example, the popular React framework or jQuery, or even the Leaflet library, that we used before in our Mapty project. All of these packages are available through NPM.
// - Now NPM stands for Node Package Manager, because it was originally developed together with Node.js and 4Node.js.
// - However, NPM has established itself as the go to repository for all kinds of packages in Modern JavaScript Development.
// - Now, in order to actually download and use and share packages, we use the NPM software installed on our computer. And this is just a simple command line interface that allows us to do all that.
// - So basically NPM is both the repository in which packages live and a program that we use on our computers to install and manage these packages.
// - We can export values out of a module and whatever we export from a module is called Public API
// - So this is just like classes where we can also expose a public API for other codes to consume. Similarly, in the case of modules, this public API is actually consumed by importing values into a module.
// - "imports" and "exports", can only happen at the top level.
// - Also all imports are hoisted. So no matter where in a code you're importing values, it's like the import statement will be moved to the top of the file.

// - Example -
// - For instance, if we have a file sayHi.js exporting a function:
//
// sayHi.js
// export function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// - And then another file may import and use it:
//
// main.js
// import {sayHi} from './sayHi.js';
// alert(sayHi);
// function...
// sayHi('John');
// Hello, John!

// - The import directive loads the module by path ./sayHi.js relative to the current file, and assigns exported function sayHi to the corresponding variable.

// Note:
// - Modules work only via HTTP(s), not locally.
// - If you try to open a web-page locally, via "file:
// protocol", you’ll find that "import/export" directives don’t work. Use a local web-server, such as static-server or use the “live server” capability of your editor, such as VS Code Live Server Extension to test modules.

// ---------------------------------------------------------------------------------------------------------------------
// => IMPORT AND EXPORTS -

// => Exports -
// - There are two types of exports. One is Named Exports and other is Default Exports.

// 1. Default Export -
// -  Default exports are useful to export only a single object, function, variable. During the import, we can use any name to import.

// - Example 1 -
// file module.js
// var x=4;
// export default x;

// file test.js
// while importing x in test.js
// import y from './module';
// note that y is used import x instead of
// import x, because x was default export
// console.log(y);
// output will be 4

// - Example - 2
// file math.js
// export default function square(x) {
//   return x * x;
// }

// while importing square function in test.js
// import square from './math;
// console.log(square(8))
//64

// 2. Named Export -
// - Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

// - Example -
//file math.js
// function square(x) {
//   return x * x;
// }
// function cube(x) {
//   return x * x;
// }
// export { square, cube };

//while importing square function in test.js
// import { square, cube } from './math;
// console.log(square(8))
//64
// console.log(cube(8))
//512

// => Using Named and Default Exports at the same time -
// - It is possible to use Named and Default exports in the same file. It means both will be imported in the same file.

// - Example -
//module.js
// var x=2;
// const y=4;
// function fun() {
//    return "This a default export."
// }
// function square(x) {
//   return x * x;
// }
// export { fun as default, x, y, square };

// - While importing this module.js we can use any name for fun because it is a default export and curly braces for other named exports.

//test.js file
// import anyname, { x, y, square} from './module.js';
// console.log(anyname());
//This is a default export.
// console.log(x);
//2

// => Import and Export Rename -
// - While exporting a module, we can use the new names to functions and variable we are exporting and the new names will used to reference that function
// - While importing module, we can also use new names to reference of the imports functions or variables.

// - Example -
// inside module.js
// export {
//     fun1 as function1,
//     fun2 as function2
// };

// when you want to use the module
// import in the required file with different name
// import { function1 as newName1, function2 as newName2 } from './module.js';

// => Importing Everything From A Module At once -
// - We can import everything at once using the "*" operator.

// - Example -
// - This inserts myModule into the current scope, containing all the exports from the module in the file located in /modules/my-module.js.
// import * as myModule from "/modules/my-module.js";

// - Here, accessing the exports means using the module name ("myModule" in this case) as a namespace. For example, if the module imported above includes an export doAllTheAmazingThings(), you would call it like this -
// myModule.doAllTheAmazingThings();

// ---------------------------------------------------------------------------------------------------------------------
// => DIFFERENCE BETWEEN ES6 MODULES AND CLASSIC SCRIPTS -

// - Classic scripts are basically just scripts without modules. Scripts which we don't export using the ES6 Modules.
// - Now, You might be thinking the Classics Scripts are also files aren't they also Modules?

// => (Classic) Script -
// File extensions: .js.
// Mime Type: text/javascript (among others).

// 1. Scripts are the OG JavaScript. It's what many people and tools still assume when they are handed "generic JavaScript". Even very recent APIs like service workers default to treating their URLs as classic scripts by default.
// 2. Scripts are simple. They load. They run. They use globals.
// 3. While scripts are super popular when running code in the browser, authoring code as classic scripts is far less typical. Scripts are often the output of build tools and not written by hand. This doesn't mean to discount the jQuery module pattern and hand-written IIFEs. They just lost mindshare over the past few years -
// - Top level this is globalThis.
// - Top level 'use strict' switches to strict mode for the current file only, default is loose mode. There's some finer details around concatenated and inline scripts.
// - Top level declarations are globals.
// - await is a valid identifier outside of async functions.
// - await expressions in top level code are a syntax error.
// - HTML comments are valid as a line comments.
// - import/export statements are a syntax error.
// - import.meta expressions are a syntax error.
// - Files that are only valid as Classic Scripts or CommonJS:

// - Examples -
//
// 1. Syntax error in Module
// <!-- HTML comment time! -->

//
// 2. Syntax error in Module
// const await = 42;
// I'm not aware of files that are syntactically valid Classic Scripts but would cause a syntax error in CommonJS. Those differences only surface at runtime:

//
// 3. Sets a global in script, sets a property on `exports` in CommonJS
// this.x = 42;
// (function () { 'use strict';
//   console.log(x);
// throws in CommonJS, works in classic script
// })();

//
// 4. Sets a global in script, creates a file-scoped variable in CommonJS
// var y = 42;
// if (globalThis.y === 42) {
//
// runs in script but not in CommonJS
// }

// => Module -
// File extensions: .mjs, .js.
// Mime Type: text/javascript (among others).

// 1. Modules are the attempt to standardize a proper modern file format for JavaScript code. It deviates from scripts in some ways, most importantly in that it has dependency management built-in and executes the same resource only once.
// 2. But since it was a new file format with new syntax, the standards body also took the opportunity to throw in some breaking changes. This allowed adding support for top level await and the removal of HTML comments -
// - Top level this is undefined.
// - Code runs in strict mode by default. Top-level 'use strict' has no effect.
// - Top level declarations are scoped to the current module.
// - await is a reserved keyword and may not be used as an identifier (syntax error).
// - Top level code can use await (pending proposal).
// - HTML comments are a syntax error.
// - import/export statements can be used.
// - import.meta expressions can be used.
// - Files that are only valid as modules:

// - Example -
//
// 1. Syntax error in Classic Script and CommonJS
// console.log(import.meta);
//
// Even worse: The same syntax error but only at runtime.
// console.log(eval('import.meta'));

//
// 2. Syntax error in Classic Script and CommonJS
// await 42;

//
// 3. Syntax error in Classic Script and CommonJS
// import x from 'x';
// export default 42;

// Note:
// 1. The first difference is that in modules, all top level variables are scoped to the module as modules have their own scope. So basically variables are private to the module by default. And the only way an outside module can access a value that's inside of a module is by exporting that value. Whereas In Classic Scripts, all top level variables are always global this can lead to problems like global namespace pollution, where multiple scripts try to declare variables with the same name and then these variables collide. So private variables are the solution to this problem.

// 2. Next ES modules are always executed in "strict mode" while scripts on the other hand are executed in "sloppy mode" by default. So with modules, there is no more need to manually declare strict mode.

// 3. The "this" keyword is always undefined at the top level in Modules whereas in Classic Scripts it points at the Window Object.

// 4. In Module, we can export and import values between them using this ES6 "import" and "exports" syntax. But in regular scripts, importing and exporting values is just completely impossible.

// 5. Finally about downloading the files, the module files always automatically happens in an asynchronous way. And this is true for a module loaded from HTML as well as for modules that are loaded by importing one module into another using the import syntax. Now regular scripts on the other hand, are downloaded by default in a blocking  synchronous way, unless we use the async or differ attributes on the script tag.

// ---------------------------------------------------------------------------------------------------------------------
// => WHY MODULES AND ITS BENIFITS -

// 1. Compose Software - Modules are small building blocks that we put together to build complex application.
// 2. Isolate Components - Modules can be developed in isolation without thinking about the entire codebase.
// 3. Abstract Code - Implement Low-Level code in modules and import these abstractions into other modules.
// 4. Organised Code - Modules naturally leads to a more organised codebase.
// 5. Reuse Code - Modules allows us to easily reuse the same code, even across multiple projects.

// ---------------------------------------------------------------------------------------------------------------------
// => HOW ES6 MODULES ARE IMPORTED -

// - Lets understand this importing of module with the help of a example -
// - Example -
// index.js
// import {rand} from "./math.js"
// import {showDice} from "./dom.js"
// const dice = rand(1, 6, 2);
// showDice(dice)

// - Exaplaination -
// - So here we're importing a value called "rand" from the "math.js" module and "showDice" from the "dom.js" module.
// - Now, as always, when a piece of code is executed, the first step is to parse that code.
// - Remember that parsing basically means to just read the code, but without executing it.
// - And this is the moment in which imports are hoisted. And in fact, the whole process of importing modules happens before the code in the main module (main code in our file) is actually executed.
// - In this example, it is the index.js module which imports the dom and math modules in a synchronous way. What that means is that only after all imported modules have been downloaded and executed, the main index.js module will finally be executed as well. Now this is only possible because of top level imports and exports that's because if we only export and import values outside of any code that needs to be executed, then the engine can know all the imports and exports during the parsing phase while the code is still being read before being executed.
// - Now, if we were allowed to import a module inside of a function, then that function would first have to be executed before the import code happened. And in that case, modules could not be imported in a synchronous way.
// - This means the importing module would have to be executed first. But you might ask why do we actually want
// modules to be loaded in a synchronous way? Isn't synchronous bad? And, the answer is that this is the easiest way in which we can do things like Bundling and Dead Code Elimination(Deleting code that's actually not even necessary).
// - This is very important in large projects with hundreds of modules and that includes third party modules from which we usually only want a small piece and not the entire module. So by knowing all dependencies between modules before execution, bundlers like Webpack and Parcel can then join multiple modules together and eliminate that code. And so essentially this is the reason why we can only import and export outside of any code that needs to be executed.
// - After the parsing process has figured out which modules it needs to import, then these modules are actually downloaded from the server. And remember downloading actually happens in an asynchronous way. It is only the importing operation itself that happens synchronously.
// - Then after a module arrives, it's also parsed and the modules exports are linked to the imports in index.js. So for example, the math module exports a function called rand And this export is then connected to the rand import in the index.js module. And this connection is actually a Live Connection. So exported values are not copied to imports.Instead, the import is basically just a reference to the export at value like a pointer. So when the value changes in the exporting module, then the same value also changes in the importing module. And this is quite important to understand because it's unique to ES6 modules. Other module systems do not work like this, but JavaScript modules do.
// - Next code in the imported modules is executed And with this the process of importing modules is finally finished.
// - Now it's time for the importing module to be finally executed as well, index.js in this example.

// ---------------------------------------------------------------------------------------------------
// => MODULE PATTERNS -

// - The Module pattern is how developers used to create Modules in JS before ES6 Modules.
// - The Module pattern is used to mimic the concept of classes (since before JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object — similar to how classes are used in other programming languages like Java or Python. That allows us to create a public facing API for the methods that we want to expose to the world, while still encapsulating private variables and methods in a closure scope.

// - There are several ways to accomplish the module pattern -
//   1. Anonymous closure
//   2. Global import
//   3. Object interface
//   4. Revealing module pattern

// 1. Anonymous Closure / IIFE-
// - We will use an Anonymous Closure Or IIFE That'll help us accomplish our goal by putting all our code in an anonymous function. (Remember: in JavaScript, functions are used in to create a new scope and since functions creates scope its members will be private to outside scope).
// - Then We will put this IIFE function in a differenct Script file and use in the <Script> tag of the HTML file. So, whenever the DOM will parse this <Script> Tag our IIEF function will automatically get executed just like modules.

// Note: Remember to put out IIFE Script before the Script in which we want to have this IIFE function features.

// - Example -
// var global = 'Hello, I am a global variable :)';
// (function () {
// We keep these variables private inside this closure scope

// var myGrades = [93, 95, 88, 0, 55, 91];

// var average = function() {
//   var total = myGrades.reduce(function(accumulator, item) {
//     return accumulator + item}, 0);

//   return 'Your average grade is ' + total / myGrades.length + '.';
// }

//   var failing = function(){
//     var failingGrades = myGrades.filter(function(item) {
//       return item < 70;});

//     return 'You failed ' + failingGrades.length + ' times.';
//   }

//   console.log(failing());
//   console.log(global);
// }());

// 'You failed 2 times.'
// 'Hello, I am a global variable :)'

// Note :
// - With this construct, our anonymous function has its own evaluation environment or "closure", and then we immediately evaluate it. This lets us hide variables from the parent (global) namespace.

// - What's nice about this approach is that is that you can use local variables inside this function without accidentally overwriting existing global variables, yet still access the global variables.

// 2. Global Imports -
// - Another popular approach used by libraries like jQuery is global import. It’s similar to the Anonymous Closure we just saw, except now we pass in globals as parameters.

// - Example -
// (function (globalVariable) {
//
// Keep this variables private inside this closure scope
//   var privateFunction = function () {
//     console.log("Shhhh, this is private!");
//   };

//
// Expose the below methods via the globalVariable interface while
//
// hiding the implementation of the method within the
//
// function() block

//   globalVariable.each = function (collection, iterator) {
//     if (Array.isArray(collection)) {
//       for (var i = 0; i < collection.length; i++) {
//         iterator(collection[i], i, collection);
//       }
//     } else {
//       for (var key in collection) {
//         iterator(collection[key], key, collection);
//       }
//     }
//   };

//   globalVariable.filter = function (collection, test) {
//     var filtered = [];
//     globalVariable.each(collection, function (item) {
//       if (test(item)) {
//         filtered.push(item);
//       }
//     });
//     return filtered;
//   };

//   globalVariable.map = function (collection, iterator) {
//     var mapped = [];
//     globalUtils.each(collection, function (value, key, collection) {
//       mapped.push(iterator(value));
//     });
//     return mapped;
//   };

//   globalVariable.reduce = function (collection, iterator, accumulator) {
//     var startingValueMissing = accumulator === undefined;

//     globalVariable.each(collection, function (item) {
//       if (startingValueMissing) {
//         accumulator = item;
//         startingValueMissing = false;
//       } else {
//         accumulator = iterator(accumulator, item);
//       }
//     });

//     return accumulator;
//   };
// })(globalVariable);

// - In this example, globalVariable is the only variable that’s global. The benefit of this approach over anonymous closures is that you declare the global variables upfront, making it crystal clear to people reading your code.

// 3. Object Inteface -

// - Yet another approach is to create modules using a self-contained object interface

// - Example -
// var myGradesCalculate = (function () {

//
// Keep this variable private inside this closure scope
//   var myGrades = [93, 95, 88, 0, 55, 91];

//
// Expose these functions via an interface while hiding
//
// the implementation of the module within the function() block

//   return {
//     average: function() {
//       var total = myGrades.reduce(function(accumulator, item) {
//         return accumulator + item;
//         }, 0);

//       return'Your average grade is ' + total / myGrades.length + '.';
//     },

//     failing: function() {
//       var failingGrades = myGrades.filter(function(item) {
//           return item < 70;
//         });

//       return 'You failed ' + failingGrades.length + ' times.';
//     }
//   }
// })();

// myGradesCalculate.failing();
// 'You failed 2 times.'
// myGradesCalculate.average();
// 'Your average grade is 70.33333333333333.'

// - As you can see, this approach lets us decide what variables/methods we want to keep private (e.g. myGrades) and what variables/methods we want to expose by putting them in the return statement (e.g. average & failing).

// 4. Revealing Module Pattern -
// - This is very similar to the above approach, except that it ensures all methods and variables are kept private until explicitly exposed.

// - Example -
// var myGradesCalculate = (function () {

//
// Keep this variable private inside this closure scope
//   var myGrades = [93, 95, 88, 0, 55, 91];

//   var average = function() {
//     var total = myGrades.reduce(function(accumulator, item) {
//       return accumulator + item;
//       }, 0);

//     return'Your average grade is ' + total / myGrades.length + '.';
//   };

//   var failing = function() {
//     var failingGrades = myGrades.filter(function(item) {
//         return item < 70;
//       });

//     return 'You failed ' + failingGrades.length + ' times.';
//   };

//
// Explicitly reveal public pointers to the private functions
//
// that we want to reveal publicly

//   return {
//     average: average,
//     failing: failing
//   }
// })();

// myGradesCalculate.failing();
// 'You failed 2 times.'
// myGradesCalculate.average();
// 'Your average grade is 70.33333333333333.'
