# Syntax, logical and runtime errors

By the end of this reading, you'll be able to:

- Recognize common types of errors in JavaScript

Here are some of the most common errors in JavaScript:

    - ReferenceError 
    - SyntaxError 
    - TypeError 
    - RangeError

There are some other errors in JavaScript. These other errors include:

    - AggregateError 
    - Error 
    - InternalError 
    - URIError

In this reading, I'll focus on Reference, Syntax, Type, Range, and Logical errors.

## ReferenceError

A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, say, attempting to console log a variable that doesn't exist:

```javascript
console.log(username);
```

If the variable named username hasn't been declared, the above line of code will result in the following output:

```javascript
Uncaught ReferenceError: username is not defined
```

## SyntaxError

Any kind of invalid JavaScript code will cause a SyntaxError.

For example:

```javascript
var a "there's no assignment operator here";
```

The above line of code will throw the following error:  

```javascript
Uncaught SyntaxError: Unexpected string
```

There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the try-catch block.  

## TypeError

A TypeError occurs when a method is used on an incompatible data type.

A simple example is attempting to run the pop() method on a string:

```javascript
"hello".pop() // Uncaught TypeError: "hello".pop is not a function
```

Strings, though array-like, do not support array methods such as pop(). This array-like behavior of strings was discussed in an earlier lesson in this course. However, strings lack many of the array methods, and attempting to use such methods on a string will result in a TypeError.

## RangeError

A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

Here's a simple example of converting an everyday Base 10 number (common decimal system) to a Base 2 number (binary number).

For example:

```javascript
(10).toString(2);
// Converts the number 10 into its binary representation: '1010'
```

The value of 2 when passed to the toString() method, is like saying to JavaScript: *convert the value of 10 of the Base 10 number system, to its counterpart in the Base 2 number system*.

JavaScript obliges and translates the regular number 10 to its binary counterpart.

Besides using Base 2 number system, I can also use the Base 8, like this:

```javascript
(10).toString(8); // 12
```

I get back the value 12, which is the plain number 10, written in Base 8 number system.

However, if I try to use a non-existing number system, such as an imaginary Base 100, since this number system effectively doesn't exist in JavaScript, I will get the RangeError, because a non-existing Base 100 system is out of range of the number systems that are available to the toString() method:

```javascript
(10).toString(100); 
// Uncaught RangeError: toString() radix argument must be between 2 and 36
```

## Logical Errors

Logical errors cause incorrect behavior in programs despite the absence of syntax or runtime errors.

```javascript
function addNumbers(a, b) {
  return a - b; // Logical error
}
console.log(addNumbers(5, 3));  
// Output: 2 (Incorrect, expected: 8)
```

As a beginner, there are several logical errors that you may encounter and there are a few steps you can integrate in your practice over time such as:

- **Debug Using Breakpoints**: Inspect variable values step-by-step. Breakpoints are a common feature available in most modern IDEs such as VS Code.
- **Review Logic**: Walk through the code to confirm it meets the intended functionality.
- **Peer Review**: Another perspective can reveal hidden issues.

## Error Object Properties

JavaScript errors are essentially objects with useful properties that are accessible. These include:

1. **name**: The type of error (e.g., TypeError, RangeError)
2. **message**: A description of the error
3. **stack**: A stack trace showing where the error occurred

Let us look at an example:

```javascript
try {
  let a = b; // ReferenceError
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // b is not defined
  console.log(error.stack);   // Stack trace
}
```

## Best Practices for Handling Errors

1. **Use Try-Catch Blocks**: To handle predictable runtime errors gracefully
2. **Validate Inputs**: Helps prevent invalid operations by checking inputs
3. **Use Specific Error Types**: Throw custom errors where necessary, for clarity

While these concepts will be familiar after regular practice, here is an example for demonstration of these best practices:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
}
```

## Distinguishing factors between Error Types

Finally let us look at the distinguishing factors for Syntax, Logical, and Runtime Errors:

- **Syntax Errors**: Prevent code execution due to invalid syntax
- **Logical Errors**: Allow execution but cause incorrect output
- **Runtime Errors**: Occur during execution and halt the program unless handled

With this reading, you’ve learned about common JavaScript errors, how to identify them, and best practices for handling them effectively.
