
# DSA
### Understanding Stacks with Example


### Stack
Imagine parking cars in a single-file line. You always park the newest car at the front, and when you need to use a car, you take the one in front first. You can't take a car from the middle without moving the ones in front of it. This is how a stack works in programming.

A stack is a data structure following the Last In, First Out (LIFO) principle. The last item added is the first one removed.

Push:  Add an item to the front.

Pop:  Remove the front item.

Stacks are useful for tasks like undoing actions, managing function calls, and navigating browser history. They ensure tasks are handled in reverse order, just like moving cars in a line.
### Creating a Stack

Hi Let's dive into creating a stack in JavaScript. It's super fun and quite useful!

#### Step 1: The Blueprint (Class)

You know how an architect makes a blueprint before building a house? Well, in programming, we use something similar called a `class`. It's like a template for creating objects. In our case, we want to create a stack.

```javascript
class Stack {
    constructor() {
        this.stack = [];
    }
}
```

**Why a Class?**
- A `class` helps keep our code neat and organized.
- It allows us to create multiple stack objects with the same structure and behavior. Neat, right?

#### Step 2: Setting Up (Constructor)

Now, when we use this class to create a stack, we need to set it up properly from the start. That's where the `constructor` comes in. It's a special method that runs when we create a new stack object.

```javascript
constructor() {
    this.stack = [];
}
```

**Why the Constructor?**
- It sets up the initial state of our stack object.
- In this case, it initializes `this.stack` as an empty array. Think of it as preparing an empty plate for our stack of pancakes. 

#### Step 3: Using the Stack

Let's create a stack and see it in action!

```javascript
const myStack = new Stack();  // Creating a new instance of the Stack class
console.log(myStack.stack);   // Output: []
```

**What's Happening?**
- We create a new stack object named `myStack`.
- The `stack` property is an empty array, ready to hold our items.

### Adding Functions (Methods)

Now that we have our stack, let's add some functions to make it useful.

#### Adding an Item (push)

To add an item to the stack, we use the `push` method. It's like putting a new plate on top of a stack of plates.

```javascript
push(item) {
    this.stack.push(item);
}
```

#### Removing an Item (pop)

To remove the top item from the stack, we use the `pop` method. But wait, we should check if the stack is empty first to avoid any errors.

```javascript
pop() {
    if (this.isEmpty()) {
        throw new Error("Stack is empty");
    }
    return this.stack.pop();
}
```

#### Viewing the Top Item (peek)

If we want to see the top item without removing it, we use the `peek` method.

```javascript
peek() {
    if (this.isEmpty()) {
        throw new Error("Stack is empty");
    }
    return this.stack[this.stack.length - 1];
}
```

#### Checking if Stack is Empty (isEmpty)

To check if our stack has any items, we use the `isEmpty` method.

```javascript
isEmpty() {
    return this.stack.length === 0;
}
```

#### Getting Stack Size (length)

To find out how many items are in our stack, we use the `length` method.

```javascript
length() {
    return this.stack.length;
}
```

### Summary

So, here's what we've got:
- A stack is like a stack of plates (LIFO: Last In, First Out).
- We use a class to create our stack, starting with an empty array.
- Methods like `push`, `pop`, `peek`, `isEmpty`, and `length` help us manage the stack efficiently.