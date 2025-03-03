# DSA
### Understanding Queue with Example

### Queue

A queue is like waiting in line at McDonald's drive-thru. The first person to join the line gets served first. Everyone else waits their turn behind them. This way, the first come, first served rule is followed. In a queue, the first item in line is dealt with first, and each item waits its turn, just like people waiting in line. It's a fair and organized way to make sure everyone gets their turn.


Let's say you have a popular app like a ride-sharing service (think Uber or Ola). When many users request rides at the same time, the system needs to handle these requests efficiently and fairly. Here's how a queue helps:

Request Handling: When users request a ride, each request is placed in a queue.

Driver Allocation: The app processes these ride requests in the order they were received, ensuring that the first user to request a ride is the first to get matched with a driver.

Notifications: Each user in the queue gets notified about their ride status based on their position in the queue.

This way, the queue system helps the app scale efficiently, managing high volumes of requests smoothly, ensuring fairness, and providing a good user experience.

### Creating a Queue

Hi! Let's dive into creating a queue in JavaScript. It's quite useful and pretty straightforward!

#### Step 1: The Blueprint (Class)

Just like we plan a house with a blueprint, in programming, we use a `class` as a template for creating objects. Here, we want to create a queue.

```javascript
class Queue {
    constructor() {
        this.queue = [];
    }
}
```

**Why a Class?**
- A `class` helps keep our code tidy and organized.
- It lets us create multiple queue objects with the same structure and behavior. Pretty neat!

#### Step 2: Setting Up (Constructor)

When we use this class to create a queue, we need to set it up from the start. This is where the `constructor` method comes in. It runs when we create a new queue object.

```javascript
constructor() {
    this.queue = [];
}
```

**Why the Constructor?**
- It sets up the initial state of our queue object.
- In this case, it initializes `this.queue` as an empty array. Think of it as preparing an empty row for our queue.

#### Step 3: Using the Queue

Let's create a queue and see it in action!

```javascript
const myQueue = new Queue();  // Creating a new instance of the Queue class
console.log(myQueue.queue);   // Output: []
```

**What's Happening?**
- We create a new queue object named `myQueue`.
- The `queue` property is an empty array, ready to hold our items.



### Adding Functions (Methods)

Now that we have our queue, let's add some functions to make it useful.

#### Adding an Item (enqueue)

To add an item to the queue, we use the `enqueue` method. It's like adding a new person to the end of a line.

```javascript
enqueue(item) {
    this.queue.push(item);
}
```

#### Removing an Item (dequeue)

To remove the front item from the queue, we use the `dequeue` method. We should check if the queue is empty first to avoid any errors.

```javascript
dequeue() {
    if (this.isEmpty()) {
        throw new Error("Queue is empty");
    }
    return this.queue.shift();
}
```

#### Viewing the Front Item (peek)

If we want to see the front item without removing it, we use the `peek` method.

```javascript
peek() {
    if (this.isEmpty()) {
        throw new Error("Queue is empty");
    }
    return this.queue[0];
}
```

#### Checking if Queue is Empty (isEmpty)

To check if our queue has any items, we use the `isEmpty` method.

```javascript
isEmpty() {
    return this.queue.length === 0;
}
```

#### Getting Queue Size (size)

To find out how many items are in our queue, we use the `size` method.

```javascript
size() {
    return this.queue.length;
}
```

#### Printing All Elements (printQueue)

To print all the elements in the queue, we use the `printQueue` method.

```javascript
printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
        str += this.queue[i] + "\n";
    }
    return str;
}
```

### Usage Examples

Now, let's see how we can use these methods with a few examples:

```javascript
const myQueue = new Queue();  // Create a new queue

myQueue.enqueue('Apple');      // Add 'Apple' to the queue
myQueue.enqueue('Banana');     // Add 'Banana' to the queue
myQueue.enqueue('Cherry');     // Add 'Cherry' to the queue

console.log(myQueue.queue);    // Output: ['Apple', 'Banana', 'Cherry']

console.log(myQueue.peek());   // Output: 'Apple'

console.log(myQueue.dequeue()); // Output: 'Apple'
console.log(myQueue.queue);    // Output: ['Banana', 'Cherry']

console.log(myQueue.isEmpty()); // Output: false

console.log(myQueue.size());   // Output: 2

console.log(myQueue.printQueue()); // Output: 'Banana\nCherry\n'

console.log(myQueue.dequeue()); // Output: 'Banana'
console.log(myQueue.dequeue()); // Output: 'Cherry'

console.log(myQueue.isEmpty()); // Output: true
```

Each of these examples demonstrates how to use the different methods to manage the queue, making it clear and practical for understanding.

