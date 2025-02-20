//creating a node.........................
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

//creating a empty linkedlist......
class linkedList {
    constructor() {
        this.head = null
    }
}

//insert at begining............

linkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data)
    this.head = newNode;
}

//insert at the end...........

linkedList.prototype.insertAtEnd = function(data) {
    const newNode = new Node(data)
    if(!this.head) {
        this.head = newNode;
        return;
    }
    let last = this.head
    while(last.next) {
        last = last.next
    }
    last.next = newNode
}

//insert at given node...........

linkedList.prototype.insertAfter = function(prevNode, data) {
    if(!prevNode) {
        console.log("the given node cannot be null")
        return
    }
   const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

// delete the first node...........

linkedList.prototype.deletFirstNode = function() {
    if(!this.head){
        return
    }
    this.head = this.head.next
}

//delete the last node.................

linkedList.prototype.deletLastNode = function() {
    if(!this.head) {
        return //nothing to delet if list is empty
    }
    if(!this.head.next) {
        this.head = null //if there is only one node
        return
    }
    let secoendLast = head
    while(secoendLast.next.next){
        secoendLast = secoendLast.next 
    }
    secoendLast.next = null
}

//delete a node with a given key...................

linkedList.prototype.deletByKey = function(key) {
    //if list is empty
    if(!this.head){
        console.log("list is empty");
    }
    //data found at head
    if (this.head.data === key) {
        this.head = this.head.next
        return
    }
    let current = this.head

    while (current.next !== null) {
        if(current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }
    console.log("No node found with key :", key)
}

//search operation inlinkedlist

linkedList.prototype.search = function(key) {
    let current = this.head
    while(current) {
        if (current.data === key) {
            return true
        }
    }
    return false
}
//trraversal...............

linkedList.prototype.printList = function() {
    let current = this.head
    let listValues = []
    while (current) {
        listValues.push(current.data) //add data to list
        current = current.next //move to next node
    }
    console.list(listValues.join(" -> "));
}

// Reverse linked list...........................

linkedList.prototype.reverse = function() {
    let current = this.head
    let prev = null
    let next = null
    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    this.head = prev
}



