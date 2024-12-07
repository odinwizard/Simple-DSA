
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

