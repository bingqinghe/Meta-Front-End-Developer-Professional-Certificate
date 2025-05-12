# Conditional examples

In this reading, you will learn when to use the if else statement and when to use the switch statement.

Both if else and switch are used to determine the program execution flow based on whether or not some conditions have been met.

This is why they are sometimes referred to as flow control statements. In other words, they control the flow of execution of your code, so that some code can be skipped, while other code can be executed.

At the heart of both flow control structures lies the evaluation of one or more conditions.

## Break statement

Before we understand the flow control statements, let us take a minute to understand the break statement. The break statement is used to exit a loop or stop the execution of a switch case. Once a break is encountered, the program immediately jumps out of the current block.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stops when i is 3
    }

    console.log(i);
}

// Output: 1, 2
```

Without break, the loop or switch would continue running, which could lead to unintended behavior.

Generally, if else is better suited if there is a binary choice in the condition.

For example, in plain English: *if it's sunny, wear sunglasses. Otherwise, don't*.

In this case, using an if statement is an obvious choice.

When there is a smaller number of possible outcomes of truthy checks, it is still possible to use an if else statement, such as:

```javascript
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}
```

However, if there are a lot of possible outcomes, it is best practice to use a switch statement because it is less wordy.

Switch statements

Being easier to read, it is easier to follow the logic and thus reduce the cognitive load of reading multiple conditions.

Take a note that switch uses strict equality (===) for comparisons which means, it first compares the type and then the values of the operands.

For example:

    - console.log(1 === "1"); // false (different types)
    - console.log(null === null); // true (same type and value)
    - console.log(1 == "1"); // true (type coercion)

Nevertheless, this is not a rule set in stone. It is simply a stylistic choice.

To reinforce this point, here's an example of the earlier if else conditional statement, using the switch syntax: 

```javascript
//converting the previous if-else example with switch-case
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
}
```

### Fallthrough behavior

It's important to note that in JavaScript, switch statements have fallthrough behavior, meaning that if a break is not included after a case, the code will continue to execute the next case, regardless of whether it matches. For example: In this case, if light is "green", both "green" and "orange" cases will run. To avoid this, always include a break unless intentional fallthrough is desired.

## Logical operators

You can also use logical operators like && (AND) and || (OR) to combine multiple conditions in an if else statement. For example:

```javascript
if (weather === "sunny" && temperature > 20) {
    console.log("Go for a picnic");
} else if (weather === "rainy" || temperature < 10) {
    console.log("Stay indoors");
}
```

### Switch

Switch works well with discrete, exact matches (like strings or numbers) but is less flexible than if else for evaluating complex conditions or ranges. For example this kind of condition cannot be expressed in a switch:

```javascript
if (age > 18 && age < 60) {
    console.log("Eligible for the program");
}
```

## Conclusion

Choosing between  if-else and switch is primarily a matter of readability, not performance, for most use cases, especially for a small number of conditions.
