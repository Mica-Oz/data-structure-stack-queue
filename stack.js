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
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    //no head - set head and tail to this val
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }
    //delete head
    //item2==head
    //sever connection
    //return oldHead
    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.val;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let listStack = new Stack();
listStack.push("beep");
listStack.push("bop");
listStack.push("boop");
