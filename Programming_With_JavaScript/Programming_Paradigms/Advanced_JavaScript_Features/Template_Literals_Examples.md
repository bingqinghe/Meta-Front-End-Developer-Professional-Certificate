# Template literals examples

The aim of this reading is to help you understand how template literals work.

## What are template literals?

Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:

```javascript
'Hello, World!'
"Hello, World!"
```

Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  

```javascript
`Hello, World!`
```

The above code snippet is an example of a template string, which is also known as a template literal.

Note: On most keyboards, the backtick character can be located above the TAB key, to the left of the number 1 key.

With template literals, an expression can be embedded in a placeholder. A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string.

Differences between a template and regular string

There are several ways in which a template string is different from a regular string.

- First, it allows for **variable interpolation**:

```javascript
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
```

The above console log will output:  

```javascript
Hello World !
```

Essentially, using template literals allows programmers to embed variables directly in between the backticks, without the need to use the + operator and the single or double quotes to delimit string literals from variables. In other words, in ES5, the above example would have to be written as follows:  

```javascript
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals
```

- Secondly, besides variable interpolation, template strings can span multiple lines.

For example, this is perfectly good syntax:

```javascript
`Hello,
World
!
`
```

Notice that this can't be done using string literals (that is, strings delimited in single or double quotes):  

```javascript
"Hello,
World"
```

The above code, when run, will throw a syntax error.

Put simply, template literals allow for multi-line strings - something that simply isn't possible with string literals.

- Thirdly, the reason why it's possible to interpolate variables in template literals is because this syntax actually allows for expression evaluation.

In other words, this:

```javascript
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
```

The above example will console log the following string: 5 stars!.

This provides many possibilities. For example, it's possible to evaluate a ternary expression inside a template literal.

Some additional use cases of template literals are nested template literals and tagged templates. However, they are a bit more involved and are beyond the scope of this reading.

If you're curious about how they work, please refer to the 'additional resources' reading provided at the end of this lesson.
