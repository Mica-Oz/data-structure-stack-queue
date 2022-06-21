//array implementation

let q = [];
//add to end
q.push(1);
q.push(2);
q.push(3);

//remove from beginning
q.shift();
q.shift();
q.shift();

//OR

//add to beginning
q.unshift(1);
q.unshift(2);
q.unshift(3);

//remove from end
q.pop();
q.pop();
q.pop();
//no way to get arouund reindexing -- ideally use linked list based queue for
//custom queue class to optimize preformance
//add to end -- enqueue
//remove from beginning -- dequeue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
