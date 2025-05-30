# String cheat sheet

By the end of this reading, you'll be able to:

- Identify examples of String functions and explain how to call them

In this cheat sheet, I'll list some of the most common and most useful properties and methods available on strings.

For all the examples, I'll be using either one or both of the following variables:

```javascript
var greet = "Hello, ";
var place = "World"
```

Note that whatever string properties and methods I demo in the following examples, I could have ran it on those strings directly, without saving them to a variable such as the ones I named greet and place.

In some of the examples that follow, for the sake of clarity, instead of using a variable name, I'll use the string itself.

All strings have at their disposal several built-in properties, but there's a single property that is really useful: the length property, which is used like this:

```javascript
greet.length; // 7
```

To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:  

```javascript
greet.charAt(0); // 'H'
```

The concat() method joins two strings:  

```javascript
"Wo".concat("rl").concat("d"); // 'World'
```

The indexOf returns the location of the first position that matches a character:

```javascript
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
```

The lastIndexOf finds the last match, otherwise it works the same as indexOf.

The split method chops up the string into an array of sub-strings:

```javascript
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
```

There are also some methods to change the casing of strings. For example:  

```javascript
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
```

Here's a list of all the methods covered in this cheat sheet:

    - charAt()
    - concat()
    - indexOf()
    - lastIndexOf()
    - split()
    - toUpperCase()
    - toLowerCase()  
