# Moving data around on the web

The modern web consists of millions and millions of web pages, connected services and databases.

There are websites communicating with other websites, getting data from data feeds and data providers, both paid and free.

All of these data flows must be facilitated with some kind of data format.

Around 2001, Douglas Crockford came up with a data interchange format based on JavaScript objects. The name given to this format was JSON, which is JavaScript Object Notation.

Before JSON, the most common data interchange file format was XML (Extensible Markup Language). However, due to XML's syntax, it required more characters to describe the data that was sent. Also, since it was a specific stand-alone language, it wasn't as easily inter-operable with JavaScript.

Thus, the two major reasons for the JSON format becoming the dominant data interchange format that it is today is two-fold:

- First, it's very lightweight, with syntax very similar to "a stringified JavaScript object". You'll learn more about the specifics of this later.
- Second, it's easier to handle in JavaScript code, since, JSON, after all, is just JavaScript.

It is often said that JSON is a subset of JavaScript, meaning it adheres to syntax rules of the JavaScript language, but it's even more strict in how proper JSON code should be formatted. In other words, all JSON code is JavaScript, but not all JavaScript code is JSON.

Besides being a data interchange format, JSON is also a file format. It's not uncommon to access some third-party data from a third-party website into our own code in the form of a json file.

For example, if you had a website with the data on stock price movements, you might want to get the data of the current stock prices from a data vendor. They might offer their data service by giving you access to the file named, say stockPrices.json, that you could access from their servers.

Once you'd downloaded that stringified JSON data into your own code, you could then convert that data to a plain JavaScript object.

That would mean that you could use your web application's code to "dig into" the third-party data-converted-to-a-JavaScript-object, so as to obtain specific information based on a given set of criteria.

For example, if the stringified JSON data was converted to an object that had the following structure:

```javascript
const currencyInfo = {
    USD: {
        // ...
    },
    GBP: {
        // ...
    },
    EUR: {
        // ...
    }
};
```

JSON data, once parsed into a JavaScript object, would be structured as a standard object with key-value pairs.

You could then access only the data on the USD property, if that's what was needed by your app at a given point in time.

Hopefully, with this explanation, you understand, at a high level, how and why you might want to use JSON in your own code.

It's all about getting stringified JSON data from a server, converting ("parsing") that data into JS objects in your own code, working with the converted data in your own code, and perhaps even stringifying the result into JSON, so that this data is then ready to, for example, be sent back to a server after your code has processed it locally.

In JSON

- Double-quoted strings are required for all keys.
- Properties are comma-separated in JSON objects and arrays, just like in JavaScript.
- String properties must be surrounded in double quotes. For example: "fruits",  "vegetables"

## JSON is just a string - but there are rules that it must follow

JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.

If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.

JSON can work with some primitives and some complex data types, as described below.

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

- primitive values: strings, numbers, booleans, null
- complex values: objects and arrays (no functions!)
- Objects have double-quoted strings for all keys
- Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
- String properties must be surrounded in double quotes. For example: "fruits", "vegetables"
- Number properties are represented using the regular JavaScript number syntax; e.g: 5, 10, 1.2
- Boolean properties are represented using the regular JavaScript boolean syntax, that is: true and false
- Null as a property is the same as in regular JavaScript; it's just a null

You can use object literals and array literals, as long as you follow the above rules.

What happens if you try to stringify a data type that is not accepted in JSON syntax?

For example, what if you try to stringify a function? The operation will silently fail.

If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error: Uncaught TypeError: Do not know how to serialize a BigInt.

### Some examples of JSON strings

Finally, here is an example of a stringified JSON object, with a single key-value pair:

```JSON
'{"color":"red"}' 
```

Here's a slightly more complex JSON object:

```JSON
'{"color":"red", "nestedObject": { "color": "blue" } }' 
```

The above JSON object encodes two properties:

```
"color":"red"
"nestedObject": { "color": "blue" }
```

It's also possible to have a JSON string encoding just an array:

```JSON
'["one", "two", "three"]'
```

The example above encodes an array with three string values. 

A JSON array of objects example:

```JSON
'[{ "color": "blue" }, { "color": "red" }]'
```

The above example encodes an array containing two objects, where each object has a single key-value pair with string values.

## What happens with unsupported data types?

If you try to stringify a data type not accepted by JSON, such as:

- Functions: The operation will silently fail.
- BigInt numbers: For example, attempting to stringify 123n will throw an error: Uncaught TypeError: Do not know how to serialize a BigInt.
