// => RULES TO FOLLOW FOR MODERN AND CLEAN CODE -

// 1. READABLE CODE -
// - Write code so that others can understand.
// - Write code such that you can read it even after 1 year of writing the code.
// - Avoid too "clever" and  "overcomplicated" solutions.
// - Use descriptive variable names: what they contain
// - Use descriptive function names: what they can do

// 2. GENERAL RULES -
// - Use DRY(Don't Repeat Yourself) principle (Refractor your CODE).
// - Don't pollute the global namespace, encapsulate instead.
// - Don't user "var" keyword, instead use "const" and "let"
// - Use strong type checks (===) and (!==)

// 3. FUNCTIONS -
// - Generally, a function should do only one specific task.
// - Dont use more than 3 function parameters.
// - Use default parameters whenever possible.
// - Functions generally return the same data type as recieved.
// - Try to use more arrow functions, they make code more readable.

// 4. OOP -
// - Try to use more ES6 classes for OOP whenever possible and less of Constructor Functions.Constructor
// - Always Encapsulate te Data and when encapsulating the data try make it like, whenever someone try to mutate the unnecessary data from outside the class it wouldn't be possible and only be able to mutate the data which is necessary. So, For that we can Use, public APIs, protected and private fields and methods. Also getters and setters.
// - Always try to Implement methods chaining
// - Don't use arrow function as methods(as in objects)

// 5. AVOID NESTED CODE -
// - Use Gaurd Clauses(it simply means to use early return statements whenever possible)
// - Use ternary operators or logical operators in JS instead of ifs.
// - Use multiple ifs instead of writing if/else statements
// - Avoid for loops, user Array methods instead.Array
// - Avoid Callback-based Asynchronous APIs

// 6. ASYNCHRONOUS CODE -
// - Consume promises  with Async/Await  for best readability.
// - Whenever possible, run promises in paralle (Promise.all)
// - Always handle errors and Promises rejections

// ---------------------------------------------------------------------------------------------------------------------
// => IMPERITIVE AND DECLARATIVE CODE -

// - There are two fundamentally different ways of writing code(paramdigms)
// 1. Imperitive Approach
// 2. Declarative Approach

// 1. Imperitive Approach -
// - Programmer Explains "How to do things"
// - We explain the computer every single steps it has to follow to achieve  a result.
// - Programming Paradigms -> Procedural, OOP and Parallel Programming
// - General Example - Telling Step-by-Step recipe of cake to the chef.

// - Code Example -
// using the passwords constant from above
// let longPasswords = [];
// for (let i = 0; i < passwords.length; i++) {
//    const password = passwords[i];
//    if (password.length >= 9) {
//       longPasswords.push(password);
//    }
// }
// console.log(longPasswords);
// logs ["freecodecamp", "mypassword123"];

// - Explaination of Example -
// - We create an empty list called longPasswords.
// - Then we write a loop that will run as many times as there are passwords in the original passwords list.
// - Then we get the password at the index of the loop iteration we are presently on.
// - Then we check if that password is greater than or equal to 9 characters long.
// - If it is, we put it into the longPasswords list.

// 2. Declarative Approach -
// - Programmer tells only "What to do"
// - We simply describe the way the computer should achieve the result.
// - The "how" part (Step-by-Step instruction) get abstracted away.
// - Programming Paradigms -> Logic, Functional and Database Approach Programming.
// - General Example - Telling on the description of the cake to the chef.

// - Code Example -
// using the passwords constant from above
// const longPasswords = passwords.filter(password => password.length >= 9);
// console.log(longPasswords);
// logs ["freecodecamp", "mypassword123"];

// - Explaination of Example -
// - This is a list of passwords.
// - This is a list of only long passwords. (After running filter.)
// - This is a list of passwords with ids. (After running map.)
// - This is a single password. (After running find.)
