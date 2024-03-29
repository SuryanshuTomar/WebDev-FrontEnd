// => TYPESCRIPT BASICS -

// -> What is TypeScript?
// - TypeScript is a syntactic superset of JavaScript which adds static typing.
// - This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
// - TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
// - Typescript is a developement tool meaning typescript cannot be used in production environments. This means that our project will still run on the Javascript. Our typescript code will get compiled into the JS and that js code will run on our project in production.

// -> So, Why to use TypeScript ?
// - JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
// - In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
// - TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// - For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
// - TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
// - TypesScript includes extra features/functionalities such as - generics, interfaces, tuples etc. But at the same time support modern JS/ECMAScript features like arrow functions, let, const, destructring etc.

// -> How to use TypeScript?
// - A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.
// - Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!

// -> How to install and run Typescript code Globally using npm ?
// - To Install -
//      Command - npm install -g typescript
// - To Transpile the type typescript code into javascript -
//      Command - tsc {typescript_filename.ts} {javascript_filename.js}

// -> How to install and run Typescript code for nodejs project using npm ?
// - To Install -
//      Command - npm install -d typescript
// - To Transpile the type typescript code into javascript -
//      Command - npx tsc {typescript_filename.ts}

// - To setup a production level environment for ts -
// -> RUN -
//    1. Create a new folder and Initialize a TS config file in it
//       -> tsc --init
//    2. Initialize an NPM package - npm init -y or npm init
//    3. Create a src folder and create an html file in it.
//    4. Create a dist(distribution) folder.
//    5. Open the tsconfig.json file and set the destination folder as -
//       -> "outDir": "./dist"
//   6. Now create a ts file in the src folder in which you will write your code. eg - index.ts and in the html file point the src of the script tag as
//     -> src="../dist/index.js"
//   7. Now to run the whole setup create watch script in package.json for typescript to output the ts code which is transpiled into the js file in the dist folder.
//     -> "ts-script": "tsc ./src/index.ts ./dist/index.js -w";
//   8. And then either run the html file for on live server or install a package lite-server as development package. then create a script in live-server as "start" : "lite-server";
//    9. RUN Commands -
//      i. npm run ts-script
//      ii. npm start

// Note:
// - Every time we make a change in the typescript script files, we need to transpile it into javascript first otherwise our made changes won't reflect in our application.
// - So, instead of manually transpiling the typescript code into javascript, we can use the command for watch mode which transpile typescript code into javascript every time we make a change in the typescript files.
//     Command
//      - To watch over the tsc file directly -
//      - npx tsc {typescript_filename.ts} -w
//      - Otherwise use - tsc {typescript_filename.ts} -w

// -----------------------------------------------------------------------------
// => TERMINOLOGY -

// - Strongly Types Languages - Demand the specification of the types. Typescript is a strongly typed language where we specify the types of the data we are using and that helps to self document and enforce our code.

// - Loosely Typed Languages - Do no demand the specification of the types.
// Javascript is a loose typed language which you may also refer to as weakely typed language.

// - This brings us to Static Typed and Dynamic Typed languages. And they are not the same as Strongly typed and Loosely typed languages.

// NOTE: A language that is strongly typed can be either statically or dynamically typed.

// - Typescript is a statically typed language, that means types are checked at Compile Time. Whereas Javascript is a dynamically typed language which means the types are checked at Run Time.

// -> Typescript Benefits -
// 1. Self Documenting Code.
// 2. Catching error during developement instead of when application is running.
// 3. Great for teams.

// -> Typescript Inference -
// https://www.typescriptlang.org/docs/handbook/type-inference.html#:~:text=In%20TypeScript%2C%20there%20are%20several,is%20inferred%20to%20be%20number%20.

// -----------------------------------------------------------------------------
// => TYPESCRIPT BENEFITS -

