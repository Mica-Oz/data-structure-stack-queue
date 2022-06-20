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
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
