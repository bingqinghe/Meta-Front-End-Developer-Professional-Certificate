# Return values from functions

## Introduction

Returning values from functions in JavaScript allows you to pass the result of a computation or operation back to the caller, enabling further use or manipulation of that result. This helps maintain modular code and reusability.  

Many functions, by default, return the value of undefined. An example is the console.log() function.

If I run:

```javascript
console.log('Hello');
```

... here's the output in the console:

```javascript
Hello
undefined
```

The console.log() function is built with the intention to not have the return value explicitly set. Therefore, it gets the default return value of undefined.  However, this default behavior can be changed by explicitly returning a value from a function.  

I'll now code my own implementation of console.log(), which doesn't return the value of undefined:

```javascript
function consoleLog(val) {
    console.log(val)
    return val
}
```

I'm using the console.log() function inside my custom consoleLog function declaration. And I'm specifying it to return the value of its argument.

Now when I run my custom consoleLog() function:

```javascript
consoleLog('Hello')
```

I get the following output:

```javascript
Hello
'Hello'
```

So, the value is output in the console, but it's also returned.

## Why is returning values useful?  

It's useful because I can use return values from one function inside another function. In JavaScript, return values can be used for further computation, passed to other functions, or even assigned to variables for later use. This makes functions more versatile and allows for cleaner, reusable code.

Here's an example.

I'll first code a function that returns a double of a number that it received:

```javascript
function doubleIt(num) {
    return num * 2
}
```

Now I'll code another function that builds an object with a specific value:

```javascript
function objectMaker(val) {
    return {
        prop: val
    }
}
```

I can call the objectMaker() function with any value I like, such as:

```javascript
objectMaker(20);
```

The returned value will be an object with a single prop key set to 20:

```javascript
{prop:20}
```

It’s important to note that the return value of a function can also be assigned to a variable for later use or manipulation.

Now consider this code:

```javascript
doubleIt(10).toString()
```

The above code returns the number 20 as a string, that is: "20".

I can even combine my custom function calls as follows:

```javascript
objectMaker( doubleIt(100) );
```

This will now return the following value:

```javascript
{prop: 200}
```

## What does all of this mean?

It means that by JavaScript allowing me to use the return keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me.

Additionally, returning values from functions helps in reducing side effects and allows functions to be pure, which is an important concept in functional programming.

Being able to return custom values is one of the foundations that makes functional programming possible. This final code example summarizes the key learning points in this reading.

```javascript
// Function to double a number
function doubleIt(num) {
    return num * 2;
}

// Function to create an object with a 'prop' key
function objectMaker(val) {
    return { prop: val };
}

// Chaining functions and returning values
let result = objectMaker(doubleIt(5));
console.log(result); // { prop: 10 }
```

## Conclusion

In summary, returning values from functions is a powerful feature in JavaScript that enhances flexibility, reusability, and readability of code. By utilizing the return keyword, you can pass data between functions, create more modular code, and support functional programming principles like purity and avoiding side effects. Understanding and leveraging return values is essential for writing efficient and maintainable JavaScript applications.
