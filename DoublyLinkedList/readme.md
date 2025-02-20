# DSA

### Understanding DoublyLinkedList with Example

## Doubly Linked List

A doubly linked list is similar to a singly linked list, but each node contains an additional reference to the previous node. This allows traversal in both directions, making operations like insertion and deletion more flexible.

## Creating a Node

```javascript
class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
```
## Explanation:
### class Node { ... }:

This line defines a class named Node. A class is like a blueprint for creating objects.

### constructor(data, next = null, prev = null) { ... }:

The constructor is a special method that is called when a new instance of the class is created. It initializes the object's properties.

It takes three parameters:

* data: The value or content that the node will hold.

* next: A reference to the next node in the doubly linked list. By default, it is set to null.

* prev: A reference to the previous node in the doubly linked list. By default, it is set to null.

### this.data= data;

This line assigns the data parameter to a property named data on the Node instance. It stores the value provided when creating the node.

### this.next= next;

This line assigns the next parameter to a property named next on the Node instance. It stores the reference to the next node (or null if no next node is specified).

### this.prev= prev;

This line assigns the prev parameter to a property named prev on the Node instance. It stores the reference to the previous node (or null if no previous node is specified).

## Creating a DoublyLinkedList

```javascript
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
```
## Explanation:

### this.head= null; this.tail= null;:

These lines assign the value null to properties named head and tail on the DoublyLinkedList instance.

The head property will serve as a reference to the first node in the doubly linked list, and the tail property will serve as a reference to the last node. Initially, both are set to null, indicating that the doubly linked list is empty and does not contain any nodes.

## Insert Data At The Beginning

```javascript
DoublyLinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data, this.head);
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
}
```
## Explanation:

### DoublyLinkedList.prototype.insertAtBeginning:

This line adds a new method called insertAtBeginning to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function(data):

This defines the insertAtBeginning method, which takes one parameter called data. This parameter will be used to create a new node.

### const newNode = new Node(data, this.head);:

Inside the method, a new instance of Node is created using the provided data. The new node's next property is set to the current head of the list.

### if (this.head) { ... } else { ... }:

This conditional checks if the list is empty by checking if this.head is null. If the list is not empty, it updates the previous reference of the current head to the new node. If the list is empty, it sets the tail to the new node.

### this.head = newNode;:

The new node is then assigned to the head of the doubly linked list. This effectively inserts the new node at the beginning of the list, making it the first node.

## Insert Data At The End

```javascript
DoublyLinkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
}
```
## Explanation:

### DoublyLinkedList.prototype.insertAtEnd:

This line adds a new method called insertAtEnd to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function(data):

This defines the insertAtEnd method, which takes one parameter called data. This parameter will be used to create a new node.

### const newNode = new Node(data, null, this.tail);:

Inside the method, a new instance of Node is created using the provided data. The new node's next property is set to null, and the prev property is set to the current tail of the list.

### if (this.tail) { ... } else { ... }:

This conditional checks if the list is empty by checking if this.tail is null. If the list is not empty, it updates the next reference of the current tail to the new node. If the list is empty, it sets the head to the new node.

### this.tail = newNode;:

The new node is then assigned to the tail of the doubly linked list. This effectively inserts the new node at the end of the list, making it the last node.

## Insert Data After a Given Node

```javascript
DoublyLinkedList.prototype.insertAfter = function(prevNode, data) {
    if (!prevNode) {
        console.log("The given node cannot be null");
        return;
    }
    const newNode = new Node(data, prevNode.next, prevNode);
    if (prevNode.next) {
        prevNode.next.prev = newNode;
    } else {
        this.tail = newNode;
    }
    prevNode.next = newNode;
}
```
## Explanation:

### DoublyLinkedList.prototype.insertAfter:

This line adds a new method called insertAfter to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function(prevNode, data):

This defines the insertAfter method, which takes two parameters: prevNode and data. prevNode is the node after which the new node will be inserted, and data is the value for the new node.

### if (!prevNode) { ... }:

This conditional checks if the prevNode is null. If it is, it logs an error message and returns, as you cannot insert after a null node.

### const newNode = new Node(data, prevNode.next, prevNode);:

A new instance of Node is created using the provided data. The new node's next property is set to prevNode's next node, and the prev property is set to prevNode.

### if (prevNode.next) { ... } else { ... }:

This conditional checks if prevNode's next node is null. If it is not null, it updates the previous reference of prevNode's next node to the new node. If it is null, it sets the tail to the new node.

### prevNode.next = newNode;:

The prevNode's next property is updated to point to the new node, effectively inserting the new node after prevNode.

## Delete the First Node

```javascript
DoublyLinkedList.prototype.deleteFirstNode = function() {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }
}
```
## Explanation:

### DoublyLinkedList.prototype.deleteFirstNode:

This line adds a new method called deleteFirstNode to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function() { ... }:

This defines the deleteFirstNode method, which does not take any parameters.

### if (!this.head) { ... }:

This conditional checks if the doubly linked list is empty by checking if this.head is null. If the list is empty, it returns without doing anything.

### this.head = this.head.next;:

This line updates the head of the doubly linked list to the next node, effectively removing the first node from the list.

### if (this.head) { ... } else { ... }:

This conditional checks if the new head is null. If it is not null, it updates the previous reference of the new head to null. If it is null, it sets the tail to null, indicating that the list is now empty.

## Delete the Last Node

```javascript
DoublyLinkedList.prototype.deleteLastNode = function() {
    if (!this.tail) {
        return;
    }
    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
}
```
## Explanation:

### DoublyLinkedList.prototype.deleteLastNode:

This line adds a new method called deleteLastNode to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function() { ... }:

This defines the deleteLastNode method, which does not take any parameters.

### if (!this.tail) { ... }:

This conditional checks if the doubly linked list is empty by checking if this.tail is null. If the list is empty, it returns without doing anything.

### this.tail = this.tail.prev;:

This line updates the tail of the doubly linked list to the previous node, effectively removing the last node from the list.

### if (this.tail) { ... } else { ... }:

This conditional checks if the new tail is null. If it is not null, it updates the next reference of the new tail to null. If it is null, it sets the head to null, indicating that the list is now empty.

## Delete a Node with a Given Key

```javascript
DoublyLinkedList.prototype.deleteByKey = function(key) {
    let current = this.head;
    while (current) {
        if (current.data === key) {
            if (current.prev) {
                current.prev.next = current.next;
            } else {
                this.head = current.next;
            }
            if (current.next) {
                current.next.prev = current.prev;
            } else {
                this.tail = current.prev;
            }
            return;
        }
        current = current.next;
    }
    console.log("No node found with key:", key);
}
```
## Explanation:

### DoublyLinkedList.prototype.deleteByKey:

This line adds a new method called deleteByKey to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function(key) { ... }:

This defines the deleteByKey method, which takes one parameter called key. This parameter will be used to find the node to be deleted.

### let current = this.head; while (current) { ... }:

This while loop iterates through the list to find the node with the given key. It continues to move current to the next node until it reaches the end of the list.

### if (current.data === key) { ... }:

This conditional checks if the data of the current node matches the key. If it does, it updates the next reference of the previous node and the previous reference of the next node to remove the current node from the list.

### console.log("No node found with key:", key):

If no node with the matching key is found, it logs a message indicating that no node was found with the given key.

## Search Operation in DoublyLinkedList

```javascript
DoublyLinkedList.prototype.search = function(key) {
    let current = this.head;
    while (current) {
        if (current.data === key) {
            return true;
        }
        current = current.next;
    }
    return false;
}
```
## Explanation:

### DoublyLinkedList.prototype.search:

This line adds a new method called search to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function(key) { ... }:

This defines the search method, which takes one parameter called key. This parameter will be used to find the node with the matching data.

### let current = this.head; while (current) { ... }:

This while loop iterates through the list to find the node with the given key. It continues to move current to the next node until it reaches the end of the list.

### if (current.data === key) { ... }:

This conditional checks if the data of the current node matches the key. If it does, it returns true, indicating that the node with the matching data was found.

### return false:

If no node with the matching data is found, it returns false, indicating that no node with the matching data was found.

## Traversal

```javascript
DoublyLinkedList.prototype.printList = function() {
    let current = this.head;
    let listValues = [];
    while (current) {
        listValues.push(current.data);
        current = current.next;
    }
    console.log(listValues.join(" <-> "));
}
```
## Explanation:

### DoublyLinkedList.prototype.printList:

This line adds a new method called printList to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function() { ... }:

This defines the printList method, which does not take any parameters.

### let current = this.head; let listValues = []; while (current) { ... }:

This while loop iterates through the list to collect the data of each node. It continues to move current to the next node until it reaches the end of the list.

### listValues.push(current.data); current = current.next;:

Inside the while loop, the data of the current node is added to the listValues array, and current is updated to the next node.

### console.log(listValues.join(" <-> ")):

Once all the data is collected, it logs the listValues array joined by " <-> " to represent the doubly linked list.

## Reverse Doubly Linked List

```javascript
DoublyLinkedList.prototype.reverse = function() {
    let current = this.head;
    let temp = null;
    while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }
    if (temp) {
        this.head = temp.prev;
    }
}
```
## Explanation:

### DoublyLinkedList.prototype.reverse:

This line adds a new method called reverse to the DoublyLinkedList class's prototype. This means all instances of DoublyLinkedList will have access to this method.

### function() { ... }:

This defines the reverse method, which does not take any parameters.

### let current = this.head; let temp = null; while (current) { ... }:

This while loop iterates through the list to reverse the links between the nodes. It continues to move current to the next node until it reaches the end of the list.

### temp = current.prev; current.prev = current.next; current.next = temp; current = current