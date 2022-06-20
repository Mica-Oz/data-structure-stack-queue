//easiest implementation is an array

const arrStack = [];

arrStack.push(1);
arrStack.push(2);
arrStack.push(3);
arrStack.push(4);
arrStack.push(5);

arrStack.pop();
arrStack.pop();
arrStack.pop();
arrStack.pop();
arrStack.pop();

//linked list implementation is most efficient

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    //delete head
    //item2==head
    //sever connection
    //return oldHead
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail === null;
    }
    return oldHead;
  }

  push(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    //no head - set head and tail to this val
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let listStack = new Stack();
