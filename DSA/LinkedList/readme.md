# DSA

### Understanding LinkedList with Example

## Linked List

A linked list is like a treasure hunt. Each element, called a node, contains two parts: the data and a reference (or link) to the next node in the sequence. Unlike an array where elements are stored in contiguous memory locations, linked list nodes can be scattered in memory. This makes adding or removing elements easier as you just update the links, without shifting other elements. However, finding specific items can take longer because you need to follow each link from the beginning. Think of it as a chain where each link points to the next, creating a flexible and dynamic way to manage a collection of items.

## Creating a Node

```javascript
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
```
## Explanation:
### class Node { ... }:

This line defines a class named Node. A class is like a blueprint for creating objects.

### constructor(data, next = null) { ... }:

The constructor is a special method that is called when a new instance of the class is created. It initializes the object's properties.

It takes two parameters:

* data: The value or content that the node will hold.

* next: A reference to the next node in the linked list. By default, it is set to null (meaning this node does not point to any other node initially).

### this.data= data;

This line assigns the data parameter to a property named data on the Node instance. It stores the value provided when creating the node.

### this.next= next;

This line assigns the next parameter to a property named next on the Node instance. It stores the reference to the next node (or null if no next node is specified).

## Creating a LinkedList

```javascript
class LinkedList {
    constructor() {
        this.head = null;
    }
}
```
## Explanation:

### this.head= null;:

This line assigns the value null to a property named head on the LinkedList instance.

The head property will serve as a reference to the first node in the linked list. Initially, it is set to null, indicating that the linked list is empty and does not contain any nodes.

## Insert Data At LinkedList

```javascript
LinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data);
    this.head = newNode;
}
```
## Explanation:

### LinkedList.prototype.insertAtBeginning:

This line is adding a new method called insertAtBeginning to the LinkedList class's prototype. This means that all instances of LinkedList will have access to this method.

### function(data):

This defines the insertAtBeginning method, which takes one parameter called data. This parameter will be used to create a new node.

### const newNode = new Node(data):

Inside the method, a new instance of Node is created using the provided data. The new node's next property is set to null by default (as defined in the Node class).

### this.head= newNode:

The new node is then assigned to the head of the linked list. This effectively inserts the new node at the beginning of the list, making it the first node.

## Insert Data At The End

```javascript
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data)
    if(!this.head) {
        this.head = newNode;
        return;
    }
    let last = this.head
    while(last.next){
        last = last.next
    }
    last.next = newNode;
}
```
## Explanation:

### LinkedList.prototype.insertAtEnd:

This line adds a new method called insertAtEnd to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

### function(data):

This defines the insertAtEnd method, which takes one parameter called data. This parameter will be used to create a new node.

### const newNode = new Node(data):

Inside the method, a new instance of Node is created using the provided data. This node’s next property is set to null by default (as defined in the Node class).

### if (!this.head) { ... }:

This conditional checks if the linked list is empty by checking if this.head is null.

If the list is empty (this.head is null), it assigns the new node to this.head, making it the first node in the list, and then returns.

### let last = this.head:

This initializes a variable last to point to the first node in the linked list.

### while (last.next) { ... }:

This while loop iterates through the list to find the last node. It continues to move last to the next node until it reaches the node that does not have a next node (i.e., the end of the list).

### last.next= newNode:

Once the last node is found, its next property is set to the new node, effectively adding the new node to the end of the list.

## Insert Data At Given Node

```javascript
LinkedList.prototype.insertAfter = function(prevNode, data) {
    if(!prevNode) {
        console.log("The given node cannot be null");
        return;
    }
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}
```
## Explanation:

### LinkedList.prototype.insertAfter:

This line adds a new method called insertAfter to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

### function(prevNode, data):

This defines the insertAfter method, which takes two parameters: prevNode and data. prevNode is the node after which the new node will be inserted, and data is the value for the new node.

### if (!prevNode) { ... }:

This conditional checks if the prevNode is null. If it is, it logs an error message and returns, as you cannot insert after a null node.

### const newNode = new Node(data, prevNode.next):

A new instance of Node is created using the provided data. The new node's next property is set to prevNode's next node, effectively linking the new node to the node that comes after prevNode.

### prevNode.next = newNode:

The prevNode's next property is updated to point to the new node, effectively inserting the new node after prevNode.

## Delete the First Node

```javascript
LinkedList.prototype.deleteFirstNode = function() {
    if(!this.head){
        return;
    }
    this.head = this.head.next;
}
```
## Explanation:

### LinkedList.prototype.deleteFirstNode:

This line adds a new method called deleteFirstNode to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

### function() { ... }:

This defines the deleteFirstNode method, which does not take any parameters.

### if (!this.head) { ... }:

This conditional checks if the linked list is empty by checking if this.head is null. If the list is empty, it returns without doing anything.

### this.head = this.head.next:

This line updates the head of the linked list to the next node, effectively removing the first node from the list.

## Delete the Last Node

```javascript
LinkedList.prototype.deleteLastNode = function() {
    if(!this.head) {
        return; // nothing to delete if list is empty
    }
    if(!this.head.next) {
        this.head = null; // if there is only one node
        return;
    }
    let secondLast = this.head;
    while(secondLast.next.next){
        secondLast = secondLast.next;
    }
    secondLast.next = null;
}
```
## Explanation:

### LinkedList.prototype.deleteLastNode:

This line adds a new method called deleteLastNode to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

### function() { ... }:

This defines the deleteLastNode method, which does not take any parameters.

### if (!this.head) { ... }:

This conditional checks if the linked list is empty by checking if this.head is null. If the list is empty, it returns without doing anything.

### if (!this.head.next) { ... }:

This conditional checks if there is only one node in the list by checking if this.head.next is null. If there is only one node, it sets this.head to null, effectively removing the only node in the list.

### let secondLast = this.head; while (secondLast.next.next) { ... }:

This while loop iterates through the list to find the second last node. It continues to move secondLast to the next node until it reaches the node that has a next node pointing to the last node.

### secondLast.next = null:

Once the second last node is found, its next property is set to null, effectively removing the last node from the list.

## Delete a Node with a Given Key

```javascript
LinkedList.prototype.deleteByKey = function(key) {
    // if list is empty
    if(!this.head){
        console.log("List is empty");
        return;
    }
    // data found at head
    if (this.head.data === key) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while (current.next !== null) {
        if(current.next.data === key) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
    console.log("No node found with key:", key);
}
```
## Explanation:

### LinkedList.prototype.deleteByKey:

This line adds a new method called deleteByKey to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

### function(key) { ... }:

This defines the deleteByKey method, which takes one parameter called key. This parameter will be used to find the node to be deleted.

### if (!this.head) { ... }:

This conditional checks if the linked list is empty by checking if this.head is null. If the list is empty, it logs a message and returns without doing anything.

### if (this.head.data === key) { ... }:

This conditional checks if the data of the head node matches the key. If it does, it updates the head of the linked list to the next node, effectively removing the head node from the list.

### let current = this.head; while (current.next !== null) { ... }:

This while loop iterates through the list to find the node with the given key. It continues to move current to the next node until it reaches the node that has the data matching the key.

### if (current.next.data === key) { ... }:

This conditional checks if the data of the next node matches the key. If it does, it updates the next property of the current node to skip the node with the matching key, effectively removing it from the list.

### console.log("No node found with key:", key):

If no node with the matching key is found, it logs a message indicating that no node was found with the given key.

## Search Operation in LinkedList

```javascript
LinkedList.prototype.search = function(key) {
    let current = this.head;
    while(current) {
        if (current.data === key) {
            return true;
        }
        current = current.next;
    }
    return false;
}
```
## Explanation:

### LinkedList.prototype.search:

This line adds a new method called search to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

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
LinkedList.prototype.printList = function() {
    let current = this.head;
    let listValues = [];
    while (current) {
        listValues.push(current.data); // add data to list
        current = current.next; // move to next node
    }
    console.log(listValues.join(" -> "));
}
```
## Explanation:

### LinkedList.prototype.printList:

This line adds a new method called printList to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

### function() { ... }:

This defines the printList method, which does not take any parameters.

### let current = this.head; let listValues = []; while (current) { ... }:

This while loop iterates through the list to collect the data of each node. It continues to move current to the next node until it reaches the end of the list.

### listValues.push(current.data); current = current.next;:

Inside the while loop, the data of the current node is added to the listValues array, and current is updated to the next node.

### console.log(listValues.join(" -> ")):

Once all the data is collected, it logs the listValues array joined by " -> " to represent the linked list.

## Reverse Linked List

```javascript
LinkedList.prototype.reverse = function() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}
```
## Explanation:

### LinkedList.prototype.reverse:

This line adds a new method called reverse to the LinkedList class's prototype. This means all instances of LinkedList will have access to this method.

### function() { ... }:

This defines the reverse method, which does not take any parameters.

### let current = this.head; let prev = null; let next = null; while (current) { ... }:

This while loop iterates through the list to reverse the links between the nodes. It continues to move current to the next node until it reaches the end of the list.

### next = current.next; current.next = prev; prev = current; current = next;:

Inside the while loop, the next node is stored in next, the current node's next property is updated to point to the previous node, prev is updated to the current node, and current is updated to the next node.

### this.head = prev:

Once all the links are reversed, the head of the linked list is updated to the last node, which is now the first node in the reversed list.