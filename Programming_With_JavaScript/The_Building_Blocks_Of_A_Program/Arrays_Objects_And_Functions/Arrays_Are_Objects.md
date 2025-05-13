# Arrays are Objects

By the end of this reading, you'll be able to:

- Explain that arrays are objects, with their own built-in properties and methods
- Outline the common way to extend arrays using the push() method
- Explain how to trim the last member of an array using the pop() method

## Arrays are objects

In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the push() and the pop() methods.

To add new items to an array, I can use the push() method:

```javascript
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
```

To remove the last item from an array, I can use the pop() method:  

```javascript
fruits.pop();
console.log(fruits); // ['apple']
```

Tying into some earlier lessons in this course, I can now build a function that takes all its arguments and pushes them into an array, like this:

```javascript
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
```

I can now call the arrayBuilder() function, for example, like this:  

```javascript
arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']
```

Even better, I don't have to console log the newly built array. Instead, I can use the return keyword to send the array back to wherever the function was called. This means the function can provide the result, and you can decide what to do with it in your code.

Instead, I can return it:

```javascript
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr; // The array is returned to the calling code.
}
```

When you call the function now: var myArray = arrayBuilder('apple', 'pear', 'plum');

The return keyword allows the function to hand the built array back to the variable myArray. You can use it however you like—for example, passing it to another function, printing it, or manipulating it further.

Additionally, I can save this function call to a variable.

I can name it anything, but this time I'll use the name: simpleArr.

```javascript
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
```

And now I can console log the values stored in simpleArr:  

```javascript
console.log(simpleArr); // ['apple','pear','plum']
```
