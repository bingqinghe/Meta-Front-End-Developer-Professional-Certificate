# Object Literals and the Dot Notation

By the end of this reading, you'll be able to:

- Explain one of the three common ways to build objects (using the object literal notation)
- Outline the common way to add new properties to objects (or update existing properties) using the dot notation

## Object literals and the dot notation

One of the most common ways of building an object in JavaScript is using the object literal syntax: {}.

Object literals are a simple way to store and organize data in JavaScript. They are useful for:

- Grouping related data: You can keep related information together in one object.

- Representing real-world things: For example, you can use objects to store details about a user or a product.

- Easy to change: You can add, remove, or update data in an object easily.

In short, object literals help make your code cleaner and easier to work with.

To be able to access this object literal, it is very common to assign it to a variable, such as:

```javascript
var user = {}; //create an object
```

Now, the variable user holds the object, and you can add properties and manipulate it in various ways.

Sometimes, an entire object can be immediately built, using the object literal syntax, by specifying the object's properties, delimited as key-value pairs, using syntax that was already covered in an earlier lesson item in this lesson.

Here's one such previously built object:

```javascript
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
```

The beauty of this syntax is that it's so easily readable.

It essentially consists of two steps:

1. Declaring a new variable and assigning an object literal to it - in other words, this: var assistantManager = {}

2. Assigning the values to each of the object's keys, using the assignment operator :

Notice that it's very easy to build any kind of an object in JavaScript using this example syntax.

For example, here's a table object:

```javascript
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
```

To access the table object, I can simply console log the entire object:  

```javascript
console.log(table);//display the object in the developer console
```

The returned value is the entire table object:  

```javascript
{legs: 3, color: 'brown', priceUSD: 100}
```

Additionally, I can console log any individual property, like this:  

```javascript
console.log(table.color); // 'brown'
```

Now that I have this "syntax recipe", I can build any other object in a similar way: 

```javascript
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
```

An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; for example:

```javascript
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
```

Additionally, nothing is preventing me from combining the two approaches. For example:  

```javascript
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
```

This flexbility additionally means that I can update already existing properties, not just add new ones:  

```javascript
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
```